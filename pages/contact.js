import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import {useState, useEffect} from 'react'

const Contact = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
      setLoading(true)
      fetch('https://database.evadixen.dk/wp-json/wp/v2/pages/13')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
      
        })
     
    }, [])
  
  if (isLoading) return 
  if (!data) return 
  console.log(data)

//   [
//     {
//         "key": "group_62bc18c0a2e5e",
//         "title": "Tilmeld nyhedsbrev",
//         "fields": [
//             {
//                 "key": "field_62bc18ddd5a03",
//                 "label": "Email",
//                 "name": "email",
//                 "type": "email",
//                 "instructions": "",
//                 "required": 1,
//                 "conditional_logic": 0,
//                 "wrapper": {
//                     "width": "",
//                     "class": "",
//                     "id": ""
//                 },
//                 "default_value": "",
//                 "placeholder": "Din email:",
//                 "prepend": "",
//                 "append": ""
//             }
//         ],
//         "location": [
//             [
//                 {
//                     "param": "page",
//                     "operator": "==",
//                     "value": "12"
//                 }
//             ]
//         ],
//         "menu_order": 0,
//         "position": "normal",
//         "style": "default",
//         "label_placement": "top",
//         "instruction_placement": "label",
//         "hide_on_screen": "",
//         "active": true,
//         "description": "",
//         "show_in_rest": 1
//     }
// ]

    
    return(

<section className={styles.main}>
    <h1>Kontakt</h1>
    <article styles={styles.main}>
        {data.yoast_head_json.og_description}
    </article>

</section>
    )
}


export default Contact;