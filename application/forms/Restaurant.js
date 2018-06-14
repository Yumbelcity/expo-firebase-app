import React, { Component } from 'react'
import t from 'tcomb-form-native'
const Form = t.form.Form
import sliderTemplate from './templates/Slider'

export const Restaurant = t.struct({
  name: t.String,
  address: t.String,
  capacity: t.Number,
  description: t.String
})

export const Options = {
  fields: {
    name: {
      label: 'Nombre (*)',
      placeholder: 'Nombre'
    },
    address: {
      label: 'Dirección (*)',
      placeholder: 'Dirección'
    },
    capacity: {
      label: 'Capacidad',
      help: 'Capacidad en personas',
      config: {
        step: 1,
        min: 1,
        max: 100
      },
      template: sliderTemplate
    },
    description: {
      label: 'Descripción (*)',
      placeholder: 'Descripción',
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.normal,
            height: 150
          },
          error: {
            ...Form.stylesheet.error,
            height: 150
          }
        }
      }
    }
  }
}