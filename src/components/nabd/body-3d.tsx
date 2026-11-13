import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Vector2 } from 'three';
import type { Level, Zone } from '@/lib/healthRules';
export type ScanColors = {primary:string;green:string;amber:string;red:string};
type Props = { zones: Record<Zone,Level>; onZone:(zone:Zone)=>void; colors:ScanColors };
// Generated anatomical scan, not a realistic human model or clinical anatomy.
function Scan({zones,onZone,colors}:Props) {
  const torso=useMemo(()=>[new Vector2(.29,0),new Vector2(.38,.22),new Vector2(.28,.5),new Vector2(.34,.83),new Vector2(.46,1.08),new Vector2(.42,1.23),new Vector2(.18,1.34)],[]);
  const shade=(zone:Zone)=>colors[zones[zone]]??colors['primary'];
  const organ=(zone:Zone,position:[number,number,number],scale:[number,number,number])=><mesh key={`${zone}-${position[0]}`} position={position} scale={scale} onClick={e=>{e.stopPropagation();onZone(zone);}}><sphereGeometry args={[1,20,16]}/><meshStandardMaterial color={shade(zone)} roughness={.45} metalness={.25}/></mesh>;
  return <group position={[0,-1.75,0]}>
    <mesh position={[0,1.6,0]}><latheGeometry args={[torso,36]}/><meshStandardMaterial color={colors['primary']} transparent opacity={.18} roughness={.7} depthWrite={false} wireframe/></mesh>
    <mesh position={[0,3.22,0]} scale={[.24,.32,.24]}><sphereGeometry args={[1,24,20]}/><meshStandardMaterial color={colors['primary']} wireframe transparent opacity={.22}/></mesh>
    {organ('Brain',[0,3.28,.04],[.19,.19,.17])}{organ('Eyes',[-.1,3.2,.2],[.055,.035,.035])}{organ('Eyes',[.1,3.2,.2],[.055,.035,.035])}
    {organ('Lungs',[-.19,2.48,.08],[.13,.24,.11])}{organ('Lungs',[.19,2.48,.08],[.13,.24,.11])}{organ('Heart',[.045,2.42,.23],[.105,.14,.09])}{organ('Metabolism',[0,2.05,.11],[.22,.15,.11])}{organ('Immune',[-.26,2.2,.14],[.065,.09,.065])}
    {[-1,1].map(side=><group key={side}><mesh position={[side*.58,2.34,0]} rotation={[0,0,side*.18]}><capsuleGeometry args={[.1,.64,6,16]}/><meshStandardMaterial color={colors['primary']} transparent opacity={.22} wireframe/></mesh><mesh position={[side*.72,1.71,0]} rotation={[0,0,side*.18]}><capsuleGeometry args={[.075,.5,6,16]}/><meshStandardMaterial color={colors['primary']} transparent opacity={.22} wireframe/></mesh><mesh position={[side*.19,.98,0]}><capsuleGeometry args={[.16,.65,6,16]}/><meshStandardMaterial color={colors['primary']} transparent opacity={.2} wireframe/></mesh><mesh position={[side*.2,.34,0]}><capsuleGeometry args={[.09,.53,6,16]}/><meshStandardMaterial color={colors['primary']} transparent opacity={.2} wireframe/></mesh>{organ('Muscles',[side*.19,1.03,.09],[.105,.35,.105])}<mesh position={[side*.2,.52,0]} onClick={e=>{e.stopPropagation();onZone('Bones');}}><capsuleGeometry args={[.025,.8,4,10]}/><meshStandardMaterial color={shade('Bones')}/></mesh></group>)}
    <mesh position={[0,2.17,-.08]} onClick={e=>{e.stopPropagation();onZone('Bones');}}><capsuleGeometry args={[.025,1.3,4,12]}/><meshStandardMaterial color={shade('Bones')}/></mesh>
    <mesh position={[0,3.23,0]} rotation={[Math.PI/2,0,0]} onClick={e=>{e.stopPropagation();onZone('Mind');}}><torusGeometry args={[.36,.007,6,48]}/><meshStandardMaterial color={shade('Mind')}/></mesh>
  </group>;
}
export default function Body3D(props:Props & {onReady:()=>void}) {
  return <Canvas frameloop="demand" dpr={[1,1.5]} camera={{position:[0,.1,5.4],fov:42}} gl={{antialias:true,alpha:true}} onCreated={()=>requestAnimationFrame(props.onReady)} aria-label="Rotatable synthetic anatomical scan">
    <ambientLight intensity={.8}/><directionalLight position={[3,4,5]} intensity={2}/>
    <Environment resolution={64}><Lightformer intensity={2} position={[0,5,0]} scale={[10,10,1]}/><Lightformer intensity={1} color={props.colors['primary']} position={[-5,1,0]} rotation-y={Math.PI/2} scale={[10,2,1]}/></Environment>
    <Scan {...props}/><OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI*.35} maxPolarAngle={Math.PI*.65}/>
  </Canvas>;
}
