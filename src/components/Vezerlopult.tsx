interface VezerlopultProps {
  novel: () => void;
  lampakapcsolasa: () => void;
}

const Vezerlopult = ({
    lampakapcsolasa,
    novel
  }: VezerlopultProps) => {
  return <>
    <h2>Vezerlőpult</h2>
    <button onClick={novel}>Növel</button>
    <button onClick={lampakapcsolasa}>Lámpa kapcsolása</button>
  </>
}

export default Vezerlopult