import React from "react"
import Buttons from '../components/button'
import ButtonVariants from '../components/buttonVariant'
import App from "../App";

export const Button = () => {
  return App(Buttons)
}

export const ButtonVariant = () => {
  return App(ButtonVariants)
}

export default { title: 'Button' }