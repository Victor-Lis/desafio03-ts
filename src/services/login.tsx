import type { UserType } from "../@types/user"
import { api } from "../api"

export const login = async (email: string, senha: string): Promise<boolean> => {
    const data = await api as unknown as UserType

    if(email !== data.email || senha !== data.password) {
        return false
    }

    return true
}
