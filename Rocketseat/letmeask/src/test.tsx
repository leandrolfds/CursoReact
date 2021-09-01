//incluir mensagem de boas vindas
type User = {
  name: string,
  email: string,
  address: {
    city: string,
    uf: string,
  }
}

export default function showWelcomeMessage(user: User) {
  return `Welcome ${user.name} ${user.email} - ${user.address.uf}`;
}

showWelcomeMessage({
  name: "Leandro",
  email: "LEANDRO",
  address: {
    city: "  São Paulo",
    uf: 'uf'
  }

})