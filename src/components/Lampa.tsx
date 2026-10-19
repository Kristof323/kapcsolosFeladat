interface LampaProps {
    ertek: number
}


const Lampa = ({ ertek }: LampaProps) => {
  return <>
    <h2>Lámpa</h2>
    <strong> Kapcsolasok szama: {ertek} </strong>
  </>
}
export default Lampa