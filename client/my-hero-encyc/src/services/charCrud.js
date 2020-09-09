import api from './apiSetup'

export const getCharacters = async () => {
    try{
        const response = await api.get("/")
        return response.data
    }catch(error){
        throw error
    }
}

export const getCharacter = async (id) => {
    try{
        const response = await api.get(`/${id}`)
        return response.data
    } catch (error){
        throw error
    }
}

export const createCharacter = async (character) => {
    try {
      const response = await api.post('/', character)
      return response.data
    } catch (error) {
      throw error
    }
  }
  export const updateCharacter = async (id, character) => {
    try {
      const response = await api.put(`/${id}`, character)
      return response.data
    } catch (error) {
      throw error
    }
  }
  export const deleteCharacter = async (id) => {
    try {
      const response = await api.delete(`/${id}`)
      return response.data
    } catch (error) {
      throw error
    }
  }