// import craftLogo from 'F:/code/projectInterview/100xDevsHarkirat/ReactProject/Food-Delivery/src/assets/cycleCraftLogo.png';
import craftLogo from '../../src/assets/logoFinal.png';
import searchIcon from '../../src/assets/searchIcon.svg';
import cartIcon from '../../src/assets/cartIcon.svg';
import addIcon from '../../src/assets/addPlus.svg'
import addIcon2 from '../../src/assets/addButton.svg'
import minusIcon from '../../src/assets/minusIcon.svg'


// Our Garage
import ktm1 from '../../src/assets/ktmDirt1.png'
import ktm2 from '../../src/assets/ktmDirt2.png'
import ktm3 from '../../src/assets/ktmDirt3.png'
import ktm4 from '../../src/assets/ktmDirt4.png'
import kawasaki1 from '../../src/assets/kawasaki01.png'
import kawasaki2 from '../../src/assets/kawasaki02.png'
import yamaha3 from '../../src/assets/yamaha3.webp'
import yamaha4 from '../../src/assets/SSyamaha1.webp'

import test1 from '../../src/assets/Ladakh.jpg'




const assets = {
    craftLogo,
    searchIcon, 
    cartIcon, 
    addIcon, 
    addIcon2,
    minusIcon
};

export const icons =[
    {
        add_icon: addIcon
    },
]

export const Garage_list =[
    {
        // bike_name: "2025 KTM 300 SX FACTORY EDITION",
        bike_name: "Dirt Bike",
        bike_image: ktm1
    },
    {
        // bike_name: "2025 KTM 250 SX",
        bike_name: "Race Bike",
        bike_image: ktm2
    },
    {
        bike_name: "2025 KTM 150 SX",
        bike_image: ktm3
    },
    {
        bike_name: "2024 KTM 300 XC-W HARDENDURO",
        bike_image: ktm4
    },
   
    {
        bike_name: "KAWASAKI KLX 300SM",
        bike_image: kawasaki1
    },
    {
        bike_name: "KAWASAKI 300R",
        bike_image: kawasaki2
    },
    {
        bike_name: "Y_Dirt_Bike3",
        bike_image: yamaha3
    },
    {
        bike_name: "Y_Dirt_Bike4",
        bike_image: yamaha4
    }
]

export const bike_list =[
    {
        _id: "1",
        name: "DirtBike 1",
        image: ktm1,
        price:6000,
        description: "This is KTM 1",
        catergory: "Dirt Bike"

    },
    {
        _id: "2",
        name: "2025 KTM 250 SX",
        image: ktm2,
        price: 6000,
        description: "This is description",
        catergory: "Dirt Bike"

    },
    {
        _id: "3",
        name: "2025 KTM 150 SX",
        image: ktm3,
        price: 6000,
        description: "This is description",
        catergory: "Dirt Bike"

    },
    {
        _id: "4",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Race Bike"

    },
    {
        _id: "5",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Race Bike"

    },
    {
        _id: "6",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Race Bike"

    },
    {
        _id: "7",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Race Bike"

    },
    {
        _id: "8",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Cafe Racer"

    },
    {
        _id: "9",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Cafe Racer"

    },
    {
        _id: "10",
        name: "",
        image: "",
        price: 6000,
        description: "",
        catergory: "Cafe Racer"

    },
]

export default assets;

// catergory