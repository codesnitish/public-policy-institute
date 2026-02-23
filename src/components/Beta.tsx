import { Box, Typography, Paper } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BOOK_TITLE = 'Policy Encyclopedia';
const AUTHOR = 'Jerry';

const PW = 2.8;
const PH = 3.8;
const THICK = 0.016;

const CONTENT = [
  { isCover: true, title: BOOK_TITLE, author: AUTHOR, body: '' },
  { title: 'Chapter I — Foundations', body: 'Public policy is the principled guide to action by governments and institutions. It shapes how we address collective problems, allocate resources, and balance competing values. This encyclopedia distils key concepts for practitioners, students, and citizens.' },
  { title: 'Chapter II — Evidence & Research', body: 'Rigorous research and data form the backbone of sound policy. From randomised trials to qualitative studies, evidence helps us understand what works, for whom, and under what conditions. A gender lens ensures that evidence reflects diverse realities.' },
  { title: 'Chapter III — Policy Design', body: 'Designing policy means choosing instruments—regulation, incentives, information—and defining targets, timelines, and metrics. Good design is inclusive, feasible, and aligned with stated goals. Stakeholder input and context are essential.' },
  { title: 'Chapter IV — Implementation', body: 'Implementation turns policy into practice. Capacity, coordination, accountability, and feedback loops determine whether intentions become outcomes. Front-line actors and local context often decide success or failure.' },
  { title: 'Chapter V — Monitoring & Evaluation', body: 'Monitoring tracks progress; evaluation assesses impact. Both help us learn and adapt. Gender-responsive M&E asks who benefits, who is left out, and whether unintended effects reinforce or reduce inequality.' },
  { title: 'Chapter VI — Governance & Institutions', body: 'Institutions—rules, organisations, norms—shape how policy is made and delivered. Governance refers to how power is exercised, how decisions are taken, and how citizens hold power to account. Inclusive governance supports inclusive policy.' },
  { title: 'Chapter VII — Global & Local', body: 'Policy is made at many levels: local, national, regional, global. Climate, health, trade, and migration connect them. Effective policy often requires coordination across levels and sectors, with attention to equity and voice.' },
  { title: 'Chapter VIII — Closing', body: 'Thus ends this volume. What you hold is not merely a book—it is a starting point. Use it to ask better questions, seek better evidence, and advocate for policies that serve everyone. The work of policy is never finished.' },
];

const N = CONTENT.length;

function makePageTexture(pageIdx: number, isFront: boolean): THREE.CanvasTexture {
  const cw = 512;
  const ch = 700;
  const canvas = document.createElement('canvas');
  canvas.width = cw;
  canvas.height = ch;
  const g = canvas.getContext('2d')!;
  const item = CONTENT[pageIdx];

  if (item.isCover) {
    if (isFront) {
      // Light Purple Cover
      g.fillStyle = '#b685cc'; 
      g.fillRect(0, 0, cw, ch);
      
      // Cover Frame / Gold Border
      g.strokeStyle = '#fde68a'; 
      g.lineWidth = 4;
      g.strokeRect(24, 24, cw - 48, ch - 48);
      g.strokeRect(32, 32, cw - 64, ch - 64);

      g.fillStyle = '#fef3c7';
      g.font = 'bold 38px Georgia, serif';
      g.textAlign = 'center';
      
      const titleWords = item.title.split(' ');
      g.fillText(titleWords[0], cw / 2, 220);
      if (titleWords[1]) g.fillText(titleWords[1], cw / 2, 270);

      g.fillStyle = '#ffffff';
      g.font = 'italic 20px Georgia, serif';
      g.fillText(`by ${item.author}`, cw / 2, 580);
    } else {
      g.fillStyle = '#ffffff'; // Inside cover – white
      g.fillRect(0, 0, cw, ch);
    }
  } else {
    // White paper
    g.fillStyle = '#ffffff';
    g.fillRect(0, 0, cw, ch);
    
    // Very subtle paper grain
    for (let i = 0; i < 1200; i++) {
      g.fillStyle = `rgba(0,0,0,${(Math.random() - 0.5) * 0.008})`;
      g.fillRect(Math.floor(Math.random() * cw), Math.floor(Math.random() * ch), 1, 1);
    }

    // Detailed outlines (layered frame)
    const margin = 4;
    const inner = 14;
    g.strokeStyle = 'rgba(0,0,0,0.25)';
    g.lineWidth = 1;
    g.strokeRect(margin, margin, cw - margin * 2, ch - margin * 2);
    g.strokeStyle = 'rgba(0,0,0,0.12)';
    g.lineWidth = 1;
    g.strokeRect(margin + 2, margin + 2, cw - (margin + 2) * 2, ch - (margin + 2) * 2);
    g.strokeStyle = 'rgba(0,0,0,0.08)';
    g.lineWidth = 1;
    g.strokeRect(inner, inner, cw - inner * 2, ch - inner * 2);
    
    // Corner accents
    const corner = 18;
    g.strokeStyle = 'rgba(0,0,0,0.06)';
    g.lineWidth = 1;
    const corners: [number, number, number, number][] = [
      [margin, margin, 1, 1],
      [cw - margin, margin, -1, 1],
      [margin, ch - margin, 1, -1],
      [cw - margin, ch - margin, -1, -1],
    ];
    corners.forEach(([x, y, dx, dy]) => {
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + dx * corner, y);
      g.moveTo(x, y);
      g.lineTo(x, y + dy * corner);
      g.stroke();
    });

    if (isFront) {
      g.fillStyle = '#1a1a1a';
      g.font = 'bold 24px Georgia, serif';
      g.textAlign = 'center';
      g.fillText(item.title, cw / 2, 72);

      g.strokeStyle = '#ddd';
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(48, 88);
      g.lineTo(cw - 48, 88);
      g.stroke();

      g.fillStyle = '#222';
      g.font = '16px Georgia, serif';
      g.textAlign = 'left';
      const words = item.body.split(' ');
      let line = '';
      let ty = 124;
      const lh = 26;
      const maxW = cw - 88;
      for (const w of words) {
        const test = line + w + ' ';
        if (g.measureText(test).width > maxW && line) {
          g.fillText(line.trim(), 44, ty);
          line = w + ' ';
          ty += lh;
        } else {
          line = test;
        }
      }
      g.fillText(line.trim(), 44, ty);

      g.fillStyle = '#888';
      g.font = 'italic 12px Georgia, serif';
      g.textAlign = 'center';
      g.fillText(`— ${pageIdx} —`, cw / 2, ch - 32);
    } else {
      g.strokeStyle = 'rgba(0,0,0,0.04)';
      g.lineWidth = 1;
      for (let ly = 140; ly < ch - 60; ly += 28) {
        g.beginPath();
        g.moveTo(44, ly);
        g.lineTo(cw - 44, ly);
        g.stroke();
      }
      g.fillStyle = 'rgba(0,0,0,0.03)';
      g.font = 'italic 36px Georgia, serif';
      g.textAlign = 'center';
      g.save();
      g.translate(cw / 2, ch / 2 + 16);
      g.rotate(-0.2);
      g.fillText(BOOK_TITLE, 0, 0);
      g.restore();
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  tex.anisotropy = 4;
  return tex;
}

const frontTextures = CONTENT.map((_, i) => makePageTexture(i, true));
const backTextures = CONTENT.map((_, i) => makePageTexture(i, false));

function curlPage(pivot: THREE.Group, angle: number, isCover: boolean): void {
  const progress = angle / Math.PI;
  const peak = Math.sin(progress * Math.PI);
  const maxLift = isCover ? 0.15 : 0.45; // Cover bends less
  
  pivot.children.forEach((mesh) => {
    const meshObj = mesh as THREE.Mesh;
    const pos = meshObj.geometry.attributes.position;
    const ox = (meshObj.userData as { ox?: Float32Array }).ox;
    if (!ox) return;
    for (let v = 0; v < pos.count; v++) {
      const normX = ox[v]! / PW; 
      const lift = peak * Math.pow(Math.sin(normX * Math.PI * 0.5), 1.5) * maxLift;
      pos.setZ(v, lift);
    }
    (pos as THREE.BufferAttribute).needsUpdate = true;
    meshObj.geometry.computeVertexNormals();
  });
}

export default function BookSimulation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageLabel, setPageLabel] = useState('Cover');
  const [hintOpacity, setHintOpacity] = useState(1);

  const stateRef = useRef({
    currentPage: 0,
    angles: new Array(N).fill(0), // All pages start on the right
    targets: new Array(N).fill(0),
    dragging: false,
    dragX0: 0,
    dragPage: -1,
    dragA0: 0,
    clk: 0,
  });
  
  const handlersRef = useRef<{ turnForward: () => void; turnBack: () => void } | null>(null);

  const updateUI = useCallback(() => {
    const s = stateRef.current;
    if (s.currentPage === 0) {
      setPageLabel('Cover');
    } else {
      setPageLabel(`Page ${s.currentPage} / ${N - 1}`);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const width = el.clientWidth || window.innerWidth;
    const height = el.clientHeight || Math.min(700, window.innerHeight * 0.8);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0f4f8');

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.5, 8.5);
    camera.lookAt(0, -0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const canvas = renderer.domElement;
    el.appendChild(canvas);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 6, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.PointLight(0xfffaea, 0.5, 20);
    fillLight.position.set(-4, 3, 5);
    scene.add(fillLight);

    // Dust particles (purple, theme-aligned) – more and more visible
    const DC = 420;
    const dPos = new Float32Array(DC * 3);
    for (let i = 0; i < DC; i++) {
      dPos[i * 3] = (Math.random() - 0.5) * 18;
      dPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      dPos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({
        color: 0xa94bc9,
        size: 0.032,
        transparent: true,
        opacity: 0.55,
      })
    );
    scene.add(dust);

    const bookGroup = new THREE.Group();
    bookGroup.rotation.y = 0.08;
    bookGroup.scale.setScalar(1.15);
    bookGroup.position.x = 0; // Fixes the book entirely to the center
    scene.add(bookGroup);

    // Static Back Cover (Lies flat on the right side initially)
    const backCoverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(PW + 0.1, PH + 0.15, 0.06),
      new THREE.MeshStandardMaterial({ color: 0xb685cc, roughness: 0.9 })
    );
    backCoverMesh.position.set(PW / 2 + 0.01, 0, -0.05);
    backCoverMesh.castShadow = true;
    backCoverMesh.receiveShadow = true;
    bookGroup.add(backCoverMesh);

    // Binding Spine
    const spine = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, PH + 0.15, N * THICK + 0.1),
      new THREE.MeshStandardMaterial({ color: 0x9f6ab5, roughness: 0.95 }) // Harmonized light purple spine
    );
    spine.position.z = -0.05;
    bookGroup.add(spine);

    const pivots: THREE.Group[] = [];
    const s = stateRef.current;

    for (let i = 0; i < N; i++) {
      const pivot = new THREE.Group();
      bookGroup.add(pivot);

      const geo = new THREE.PlaneGeometry(PW, PH, 45, 2);
      const pos = geo.attributes.position;
      const ox = new Float32Array(pos.count);
      for (let v = 0; v < pos.count; v++) {
        const xv = pos.getX(v) + PW / 2;
        ox[v] = xv;
        pos.setX(v, xv);
      }
      (pos as THREE.BufferAttribute).needsUpdate = true;
      geo.computeVertexNormals();

      const frontMesh = new THREE.Mesh(
        geo,
        new THREE.MeshBasicMaterial({
          map: frontTextures[i],
          color: 0xffffff,
          side: THREE.FrontSide,
        })
      );
      frontMesh.userData.ox = ox;
      frontMesh.castShadow = false;

      const backMesh = new THREE.Mesh(
        geo.clone(),
        new THREE.MeshBasicMaterial({
          map: backTextures[i],
          color: 0xffffff,
          side: THREE.BackSide,
        })
      );
      backMesh.userData.ox = ox;

      pivot.add(frontMesh, backMesh);
      pivots.push(pivot);
    }

    // Drag Logic
    function startDrag(cx: number): void {
      s.dragging = true;
      s.dragX0 = cx;
      const rightHalf = cx > width * 0.5;
      
      if (rightHalf) {
        s.dragPage = s.currentPage < N ? s.currentPage : -1;
      } else {
        s.dragPage = s.currentPage > 0 ? s.currentPage - 1 : -1;
      }
      if (s.dragPage >= 0) s.dragA0 = s.angles[s.dragPage]!;
    }

    function moveDrag(cx: number): void {
      if (!s.dragging || s.dragPage < 0) return;
      const dx = (cx - s.dragX0) / width;
      // Fixed backwards drag logic
      let a = s.dragA0 - dx * Math.PI * 2.2;
      a = Math.max(0, Math.min(Math.PI, a));
      s.angles[s.dragPage] = a;
      s.targets[s.dragPage] = a;
    }

    function endDrag(): void {
      if (!s.dragging) return;
      s.dragging = false;
      if (s.dragPage < 0) return;
      const a = s.angles[s.dragPage]!;
      const isUnflipped = s.dragPage >= s.currentPage;
      
      if (a > Math.PI * 0.5) {
        s.targets[s.dragPage] = Math.PI;
        if (isUnflipped) {
          s.currentPage = Math.min(N, s.dragPage + 1);
          updateUI();
        }
      } else {
        s.targets[s.dragPage] = 0;
        if (!isUnflipped) {
          s.currentPage = s.dragPage;
          updateUI();
        }
      }
      s.dragPage = -1;
    }

    const onPointerMove = (e: PointerEvent) => moveDrag(e.clientX);
    canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); startDrag(e.clientX); });
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', endDrag);

    let frameId: number;
    function animate() {
      frameId = requestAnimationFrame(animate);
      s.clk += 0.005;

      // Gentle floating animation
      bookGroup.position.y = Math.sin(s.clk * 1.5) * 0.03;

      for (let i = 0; i < N; i++) {
        if (!s.dragging || s.dragPage !== i) {
          s.angles[i] += (s.targets[i]! - s.angles[i]!) * 0.15;
        }
        
        const p = pivots[i]!;
        p.rotation.y = -s.angles[i]!;
        
        const progress = s.angles[i]! / Math.PI;
        const restZRight = (N - i) * 0.003; 
        const restZLeft = i * 0.003;        
        p.position.z = (1 - progress) * restZRight + progress * restZLeft + Math.sin(s.angles[i]!) * 0.1;

        curlPage(p, s.angles[i]!, i === 0);
      }

      // Animate theme dust
      const dp = dustGeo.attributes.position;
      for (let i = 0; i < DC; i++) {
        dp.setY(i, dp.getY(i) + 0.003 + Math.random() * 0.002);
        if (dp.getY(i) > 6) dp.setY(i, -6);
        dp.setX(i, dp.getX(i) + Math.sin(s.clk + i * 0.41) * 0.001);
      }
      (dp as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    }
    animate();

    const turnForward = () => {
      if (s.currentPage >= N) return;
      s.targets[s.currentPage] = Math.PI;
      s.currentPage = Math.min(N, s.currentPage + 1);
      updateUI();
    };
    
    const turnBack = () => {
      if (s.currentPage <= 0) return;
      s.currentPage = Math.max(0, s.currentPage - 1);
      s.targets[s.currentPage] = 0;
      updateUI();
    };

    handlersRef.current = { turnForward, turnBack };

    const onResize = () => {
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      const mobile = w < 768;
      bookGroup.scale.setScalar(mobile ? 0.78 : 1.15);
    };
    window.addEventListener('resize', onResize);
    setTimeout(() => setHintOpacity(0), 6000);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', endDrag);
      canvas.remove();
      renderer.dispose();
      dustGeo.dispose();
      (dust.material as THREE.Material).dispose();
    };
  }, [updateUI]);

  return (
    <Box sx={{ background: '#f0f4f8', minHeight: '100vh', overflow: 'hidden', userSelect: 'none', position: 'relative' }}>
      <Box
        ref={containerRef}
        sx={{
          width: '100%',
          height: { xs: 'min(90vh, 820px)', sm: 'min(80vh, 750px)' },
          minHeight: { xs: 520, sm: 480 },
          cursor: 'grab',
          '&:active': { cursor: 'grabbing' },
        }}
      />
      
      <Typography sx={{ position: 'fixed', top: 32, left: '50%', transform: 'translateX(-50%)', color: '#1f2937', fontFamily: 'Georgia, serif', fontSize: 18, fontWeight: 600, letterSpacing: 2, pointerEvents: 'none' }}>
        {BOOK_TITLE}
      </Typography>

      <Typography sx={{ position: 'fixed', bottom: 90, left: '50%', transform: 'translateX(-50%)', color: '#64748b', fontFamily: 'Inter, sans-serif', fontSize: 12, pointerEvents: 'none', transition: 'opacity 1.5s', opacity: hintOpacity }}>
        Drag the page edges or use the buttons below to interact.
      </Typography>

      <Paper elevation={3} sx={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', p: 1.5, px: 3, borderRadius: 2, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)' }}>
        <Typography sx={{ color: 'text.primary', fontFamily: 'Georgia, serif', fontSize: 14, fontStyle: 'italic', minWidth: 100, textAlign: 'center' }}>
          {pageLabel}
        </Typography>
      </Paper>
    </Box>
  );
}