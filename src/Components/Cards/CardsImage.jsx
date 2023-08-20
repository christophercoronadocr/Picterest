import React, { useEffect, useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";


const CardsImage = ({ id, image, author, alts, profiler }) => {

    const [isFavorite, setisFavorite] = useState(false)

    useEffect(() => {

        if (localStorage.getItem("favorite") != null) {
            try {
                var array = localStorage.getItem('favorite');
                array = JSON.parse(array);
                const photo = array.find(picture => picture.id == id);
                if (photo) {
                    setisFavorite(true);
                }

            } catch (error) {
                console.log(error);
            }
        }

    }, [])
    


    const addFavorite = (isFavorite) => {
        if (isFavorite) {
            setisFavorite(false)
            var array = localStorage.getItem('favorite');
            array = JSON.parse(array);
            var newArray = new Array();
            array.forEach(element => {
                if (element.id != id) {
                    newArray.push(element)
                }
            });
            localStorage.setItem('favorite', JSON.stringify(newArray));
        } else{
            setisFavorite(true)

            const dataPhoto = {
                id,
                image,
                author,
                alts,
                profiler
            }
    
            if (localStorage.getItem("favorite") != null) {
                try {
                    var array = localStorage.getItem('favorite');
                    array = JSON.parse(array);
                    array.push(dataPhoto);
                    localStorage.setItem('favorite', JSON.stringify(array));
                } catch (error) {
                    console.log(error);
                }
            } else {
                let arrayOfFavotite = new Array();
                arrayOfFavotite.push(dataPhoto);
                localStorage.setItem('favorite', JSON.stringify(arrayOfFavotite));
            }
        }

        
    }


    return (
        <Card className="w-72 mb-4">
            <CardHeader floated={false} className="h-60">
                <img src={image} alt={alts} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    Photographer
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {author}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    <a href={profiler}>Look My Profile</a>
                </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                    <Typography
                        as="p"
                        variant="lead"
                        color={isFavorite ? "red" : "gray"}
                        textGradient
                        onClick={()=>addFavorite(isFavorite)}
                    >
                        <i className="fa fa-heart" aria-hidden="true" ></i>
                    </Typography>
                </Tooltip>
                <Tooltip content="Facebook">
                    <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <i className="fab fa-facebook" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                    >
                        <i className="fab fa-twitter" />
                    </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                    <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                    >
                        <i className="fab fa-instagram" />
                    </Typography>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}

export default CardsImage
