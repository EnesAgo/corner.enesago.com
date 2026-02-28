export default function BackgroundBlobs() {
  return (
    <>
      <div className="blob" style={{ width: 600, height: 600, background: '#FF2D78', top: -100, left: -200 }} />
      <div className="blob" style={{ width: 500, height: 500, background: '#00C8FF', top: 200, right: -150, animationDelay: '-4s' }} />
      <div className="blob" style={{ width: 400, height: 400, background: '#FFE500', top: 800, left: '30%', animationDelay: '-8s' }} />
    </>
  );
}
