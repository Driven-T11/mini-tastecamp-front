import axios from "axios"
import { useEffect, useState } from "react"
import CardReceita from "./components/CardReceita"

function App() {
  const [receitas, setReceitas] = useState([])

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/receitas`)
      .then(res => setReceitas(res.data))
      .catch(err => console.log(err.response.data))
  }, [])

  // Mesmo código, mas com async/await e try/catch
  // useEffect(() => {
  //   async function pegaReceita() {
  //     try {
  //       const res = await axios.get("http://localhost:5000/receitas")
  //       setReceitas(res.data)
  //     } catch (err) {
  //       console.log(err.response.data)
  //     }
  //   }
  //   pegaReceita()
  // }, [])

  return (
    <>
      {receitas.map(rec => <CardReceita key={rec._id} receita={rec}/>)}
    </>
  )
}

export default App
