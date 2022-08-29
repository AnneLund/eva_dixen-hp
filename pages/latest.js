import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Image from 'next/image'
import {bog} from '../public/bog.jpg'

const Latest = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/96')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
    if (isLoading) return <Loading/>
    if (!data) return 
 
    return(

<section className="deployments">
    <h1>Udgivelser</h1>
    <figure>
        <picture> 
        <Image className="bog" src="/bog.jpg" width={400} height={600}/>
        </picture>
       
        <figcaption>
       <h3>Som et espeløv</h3> 
       <h4> - en lille bog om traumer og hvordan man ryster dem af sig </h4>
       <p>Da Eva som 21-årig bliver udsat for en overvældende begivenhed, er det så svært for hende at acceptere, at hun fortrænger det.</p>
        
        <p> Men som årene går, bliver det sværere og sværere for hende at føle sig tilpas i sin egen krop.</p>
        <p>Da hun en dag læser, at traumer påvirker følelsen af bevægelses- frihed, slår det hende, at hendes krop måske er traumatiseret som følge af hændelsen for over et årti siden.</p>
      <p>Det bliver starten på en lang rejse ind i en verden, hun aldrig før har beskæftiget sig med, nemlig kroppens anatomi og hjernens kemiske processer.
        Men det, hun kunne læse sig frem til, var så opsigtsvækkende, at hun satte sig for at skrive bogen, du har i hænderne nu.
For stik imod hendes egne overbevisninger er traumer langtfra noget, der kun sker for voldtægtsofre, krigsveteraner og flygtninge.</p> 
<p>Traumer rammer almindelige mennesker, der lever almindelige liv. Derfor er denne bog relevant for alle, der oplever spændinger og ubehag i kroppen, eller som ønsker at være mere til stede i nuet og ikke mindst at blive bedre til at drage omsorg for sig selv.</p>
<p>Som et espeløv er en personlig og hjertevarm beretning, der har til formål at gøre os klogere på traumers natur og kroppens måde at reagere under en traumatisk hændelse – samt give kendskab til, hvordan traumet lejrer sig i kroppen, hvis det ikke bliver forløst.</p> 
<p> Måske vigtigst af alt er det en fortælling om, hvordan man bearbejder traumer for på den måde at få det bedste ud af tilværelsen.</p>
<p>I bogen vil der være konkrete og simple øvelser til netop dette.</p>
        </figcaption>
       
    </figure>
</section>
    )
}


export default Latest;