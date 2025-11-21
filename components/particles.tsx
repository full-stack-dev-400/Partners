// components/particles.tsx

type ParticlesProps = {
  className?: string;
  quantity?: number;
};

export default function Particles({ className = "", quantity = 0 }: ParticlesProps) {
  // Temporary placeholder – no visual output for now
  return <div className={className} data-quantity={quantity} />;
}
