import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../../lib';
import { ThreeTunnel } from './tunel';
import { Canvas as R3fCanvas } from '@react-three/fiber';
import { Suspense } from 'react';
const RainBowCursor = () => {
    return (
        <>
            <R3fCanvas
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '100vw',
                }}>
                <Suspense fallback={null}>
                    <ThreeTunnel.Out />
                </Suspense>
            </R3fCanvas>
            <ThreeTunnel.In>
                <EffectComposer>
                    <Fluid rainbow={true} />
                </EffectComposer>
            </ThreeTunnel.In>
        </>
    );
};

export default RainBowCursor;
