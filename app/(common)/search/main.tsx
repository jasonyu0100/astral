import { SearchBar } from "@/(cosmos)/(voyager)/spaces/spaces-epic/modal/create-space/main";
import { FormBody } from "../form/body/main";
import { FormContainer } from "../form/main";
import { FormTitle } from "../form/title/main";
import { Modal } from "../modal/main";
import { useUnsplash } from "@/(cosmos)/handler/unsplash/main";
import { useEffect, useState } from "react";

export default function SearchModal({ isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {
    const [images, changeImages] = useState([])
    const [query, changeQuery] = useState("stars")
    const { searchImage } = useUnsplash()

    useEffect(() => {
        searchImage(query).then((res) => {
        console.log(res)
        changeImages(res)
        })
    }, [query])


    return <Modal isOpen={isOpen} onClose={onClose}>
        <FormContainer>
          <SearchBar value={query} onChange={(e) => changeQuery(e.target.value)}/>
          <FormBody>
            <div className="columns-3" style={{height: '100%'}}>
              {images.map(image => 
                    <div className="shadow-md flex-shrink-0 border-white border-[5px] w-full">

                        <img src={image?.src} className="aspect-square  shadow-slate-300/30 w-full"/>
                    </div>
                )}
            </div>
          </FormBody>
        </FormContainer>
      </Modal>
}