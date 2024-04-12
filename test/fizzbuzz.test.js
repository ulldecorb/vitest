import { describe, expect, it } from 'vitest'

/*
Escribir una función que al pasarle un número:
    - Muestra "fizz" si es múltiplo de 3.
    - Muestra "buzz" si es múltiplo de 5.
    - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
    - Muestra el número si no es múltiplo de ninguno de los anteriores.
*/

function fizzbuzz (n) {
  if (typeof n !== 'number') throw new Error('argument provided must be a number')
  if (Number.isNaN(n)) throw new Error('argument provided must be a number')

  if (n % 3 === 0 && n % 5 === 0) return 'fizzbuzz'
  if (n % 3 === 0) return 'fizz'
  if (n % 5 === 0) return 'buzz'

  return n
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw if not number is provided as argument', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw specific error if not number is provided as argument', () => {
    expect(() => fizzbuzz('a')).toThrow('argument provided must be a number')
  })

  it('should throw specific error if argument is not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('argument provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if multiply of 3 is provided', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return buzz if multiply of 5 is provided', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return fizzbuzz if multiply of 3 and 5 is provided', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
