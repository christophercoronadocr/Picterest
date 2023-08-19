import { useEffect, useState } from "react"
import Routing from "./Routering/Routing"
import {instance} from './assets/API/Config'
import {separatorArray} from './assets/SeparatorArray'

function App() {

  const [Photos, setPhotos] = useState({})

  useEffect(() => {
      const setData = async () => {
          try {
              await instance.get('search?per_page=25&query=people').then(async (res) => {
                  if (res.status == 200) {
                      const datos = await separatorArray(res.data.photos)
                      setPhotos(datos);
                  }

              }).catch((err) => {
                  console.log(err);
              });

          } catch (error) {
              console.log(error);
          }
      }

      setData()

  }, [])

  const SearchPicturesByWord  = async (texto) => {
      await instance.get(`search?per_page=25&query=${texto}`).then(async (res) => {
          if (res.status == 200) {
              const datos = await separatorArray(res.data.photos)
              setPhotos(datos);
          }

      }).catch((err) => {
          console.log(err);
      });
  }

  return (
    <>
      <Routing Photos={Photos} SearchPicturesByWord={SearchPicturesByWord}  />
    </>
  )
}

export default App
