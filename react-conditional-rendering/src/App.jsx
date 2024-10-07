import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ListOfFruits from './ListOfFruits'


function App() {
  const fruits = [
    {id: 1, name: "Apple", color: "red"},
    {id: 2, name: "Banana", color: "yellow"},
    {id: 1, name: "Orange", color: "orange"},
    {id: 1, name: "Grape", color: "purple"},
    {id: 1, name: "Kiwi", color: "green"},
  ]

  const dessert = [
    {id: 1, name:"cake", color: "red"},
    {id: 2, name:"ice cream", color: "blue"},
    {id: 3, name:"pie", color: "green"},
  ]
//sorting the fruits in descending order / reverse alphabetical order
// fruits.sort((a, b) => b.name.localCompare(a.name))

// sorting the fruits in ascending order / alphabetical order
// fruits.sort((a, b) => a.name.localCompare(b.name))

//filter for colors
//const redFruits = fruits, filter(fruit => fruits.color === "red")

  return (
    <>
    
    <Header />
    {}
    {fruits.length > 0 && <ListOfFruits items = {fruits} category = "My Favorite Fruits" />}

    {dessert.length > 0 && <ListOfFruits items = {dessert} category = "My Favorite Desserts" />}

    <Footer />
    </>
  )
}

export default App
