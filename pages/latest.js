import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import Image from 'next/image'

const About = () => {
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

    const extraContent=<div>
    <div className="extra-content">
    der kan være en forbindelse imellem de muskelspændinger, 
    hun dagligt tynges af, og det gamle ubearbejdede traume, tvinger 
    det hende til at forholde sig til alt det, hun helst vil glemme. 
    <p> 
    For hvis hendes krop virkelig er fanget i et gammelt traume, hvordan 
    slipper hun den så fri?</p> 
    <p> Hvordan overbeviser hun den om, at den ikke længere 
    er i fare? Svarene på de spørgsmål viser sig at ligge i bevægelser – 
    ikke hvilke som helst, men bevægelser der aktiverer og stimulerer 
    muskelgrupper, bindevævet og forbindelsen imellem kroppen og sjælen.</p>
    <p>
    Flere forskere peger på, at traumer og længerevarende stress sætter sig i 
    kroppen som fastfrossen energi og noget tyder på, at traumer er langt mere udbredte, end vi går og tror. For i modsætning til vores vante forestilling, behøver traumer nemlig ikke kun at udspringe fra krig, vold, ulykker eller naturkatastrofer. Faktisk kan traumer opstå på baggrund af hændelser, de fleste af os kategoriserer som almindelige hverdagsoplevelser. Og de kan sætte dybe spor.
    “Tillader vi os selv virkelig at mærke efter, bliver vores oplevelser i livet 
    langt mere intense, og vi vil føle os mere forbundet til vores omverden og 
    vores medmennesker. Også når det, vi mærker, måske ikke er så rart.”</p>
    <p> – Eva Dixen</p>
    </div>
</div>


      
    return(

<section className={styles.main}>
<h1>{data.title.rendered}</h1>
    <article>
        {data.yoast_head_json.og_description}
        <figure>
            <picture>
                <Image src="/bog.jpg" alt='sometespeloev' width={300} height={400}/>    
            </picture>

            <figcaption>
                <h4>Som et espeløv - En lille bog om traumer, og hvordan man ryster dem af sig</h4>
            <p>Som 21-årig bliver Eva udsat for et overgreb. Et overgreb, hun forsøger at fortrænge, men som bider sig fast i hendes krop.</p>
            <p>
                Da det først mange år senere går op for hende, at der kan være en forbindelse imellem de muskelspændinger, hun dagligt tynges af, 
                og det gamle ubearbejdede traume, tvinger det hende til at forholde sig til alt det, hun helst vil glemme. 
            </p>
            <p>
                For hvis hendes krop virkelig er fanget i et gammelt traume, hvordan slipper hun den så fri? 
                Hvordan overbeviser hun den om, at den ikke længere er i fare?
            </p> 
            <Link href="https://muusmann-forlag.dk/som-et-espeloev/?fbclid=IwAR03kCrW6vsEZeDWHnyofq_wVuOGeVyW6hg0Z7eUOPkjzr_-dT16Wb59Bw4">
               <a title='read-more'>Læs mere</a>
                </Link>
             </figcaption>
             
   
        </figure>
    </article>
</section>
    )
}


export default About;