const help = (prefix) => {
	return `
    _Oi, eu sou Rem ✨_
_Por enquanto não faço muita coisa ツ_


  *> Comandos Disponiveis <*

• _Sticker_
> ${prefix}sticker - Responda a alguma foto/video/gif

• _Boas Vindas_
> ${prefix}welcome 1 - Ativa mensagem de boas vindas
> ${prefix}welcome 0 - Desativa mensagem de boas vindas

• _Ban_
> ${prefix}kick @usuario - Expulsa um usuário do grupo

• _Promover/Rebaixar_
> ${prefix}promote @usuario - Promover a admin
> ${prefix}demote @usuario - Rebaixar a membro

• _Link do Grupo_
> ${prefix}link - Obtem o link do grupo

• _Marcar Todos_
> ${prefix}tagall - Marca todos os membros do grupo
`
}

exports.help = help
