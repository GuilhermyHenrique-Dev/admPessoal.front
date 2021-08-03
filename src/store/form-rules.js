const state = {
    password:[
     v => (v && v.match(/([0-9])/) != null) || 'Digite ao menos um número',
     v => (v && v.match(/([A-Z])/) != null) || 'Digite ao menos uma letra maiúscula',
     v => (v && v.match(/([a-z])/) != null) || 'Digite ao menos uma letra minúscula',
     v => (v && v.match(/\W/) != null) || 'Digite ao menos um caractere especial',
     v => (v && v.length > 5) || 'Utilize no mínimo 6 caracteres',
     v => (v && v != process.env.VUE_APP_DEFAULT_PWD) || 'Utilize uma senha diferente da senha padrão',
    ],
    required: [v => !!v || 'Campo obrigatório'],
    requiredAutoComplete: [v => !!v && v.length > 0 || 'Campo obrigatório'],
    requiredSelect: [v => v != null && v != undefined || 'Campo obrigatório'],
    requiredPrice: [
      v => !!v && Number(v.replace(/\./g,'').replace(',','.')) > 0 || 'Campo obrigatório',
      v => Number(v.replace(/\./g,'').replace(',','.')) < 9999999999999999.99 || 'Insira um valor menor que 9.999.999.999.999.999,99'
    ],
    cepRules: [
      v => (v && v.match(/([0-9]{5})+(-?)+([\d]{3})/) != null) || 'CEP inválido'
    ],
    numberRules: [v => !!v || 'O número é obrigatório'],
    genderRules: [v => v.length > 0 || 'Gênero inválido'],
    cpfCnpjRules: [
      v => (v && actions.validCpfCnpj(v)) || 'CPF ou CNPJ inválidos'
    ],
    emailRules: [
      v => (v && v.match(/^[A-Za-z0-9_\-.]+@[A-Za-z0-9_\-.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/) != null) || 'E-mail inválido'
    ],
    passwordDefault: [
      v => (!!v && v == process.env.VUE_APP_DEFAULT_PWD) || 'Digite corretamente a senha inicial recebida.'
    ],
    phoneRules: [v => v.length === 14 || 'Telefone inválido'],
    rulesPass: {
      required: value => !!value || 'Não pode ser vazio.',
      min: v => (v && v.length >= 6) || 'Mínimo 6 caracters',
      matchPass: v =>
        (v && v === this.formData.password) || 'A senha não confere'
    },
    validDateRequired: [
      v => !!v || 'Campo obrigatório',
      v => actions.revalidDate(v) || 'Data inválida'
    ],
    validDate: [
      v => actions.revalidDate(v) || 'Data inválida'
    ],
    cellPhoneRules: [v => v.length === 15 || 'Celular inválido'],
    requiredField: v => !!v || 'Não pode ser vazio.',
    typeNumber: v => (v==null ||!(/[^,|^\d|^.]/g).test(v)) || 'Digite apenas números',
    typeInteger: v => (v==null || !(/[^\d]/g).test(v)) || 'Digite apenas números',
    notZero: v => !!v && Number(v.replaceAll('.','').replaceAll(',','.')) > 0 || 'O valor não pode ser zero',
    notZeroList: v => !!v && v.replaceAll(' ', '').split(';').filter(el => !el || Number(el.replaceAll('.','').replaceAll(',','.')) == 0).length == 0 || 'O valor não pode ser zero',
    typeNumberList: v => !!v && v.replaceAll(' ', '').split(';').filter(el => (/[^,|^\d|^.]/g).test(el)).length == 0 || 'Digite apenas números separados por ponto e vírgula(;)',
    typeDateFormated: v => actions.revalidDate(v) || 'Data inválida, verifique se está no formato DD/MM/YYYY',
    typeHourBR: v => !!v && v.match(/([01][\d]|[2][0-4]):([0-5][\d]):([0-5][\d])/g)!= null || 'Data inválida, verifique se está no formato HH:mm:ss (00:00:00 a 23:59:59)',
    validUrl: [v => (!v || v.match(/(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&=]*)/g) != null) || "URL inválida, verifique se incluiu o protocolo web (http:// ou https://)" ],
  
  }
  const actions = {
    revalidDate (date) {
      if(!date) return true
      if(date.length<10) return false
      const [dia, mes, ano] = date.split("/");
      let isAnoBissexto = new Date(ano, 1, 29).getMonth() == 1
      if(!isAnoBissexto){
        if( mes=="02" && Number(dia) > 28 ) {
          return false 
        }
      }
      return  date.match(/((0[1-9]|[12][\d]|3[0-1])\/(0[13578]|1[02])\/(1[9][0-9][0-9]|2[0][0-9][0-9]))|((0[1-9]|[12][\d]|30)\/(0[469]|11)\/(1[9][0-9][0-9]|2[0][0-9][0-9]))|((0[1-9]|[12][\d])\/(02)\/(1[9][0-9][0-9]|2[0][0-9][0-9]))/g) != null
    },
    validCpfCnpj (value) {
      if (value.length <= 11) {
        var cpfSize = (value.replace(/[^a-zA-Z0-9 ]/g, ''))
        //value = $.trim(value)
        value = value.replace('.', '')
        value = value.replace('.', '')
        var cpf = value.replace('-', '')
        while (cpf.length < 11) {
          cpf = '0' + cpf
        }
        var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/
        var a = []
        var b = new Number()
        var c = 11
        var x, y
        for (let i = 0; i < 11; i++) {
          a[i] = cpf.charAt(i)
          if (i < 9) {
            b += (a[i] * --c)
          }
        }
        if ((x = b % 11) < 2) {
          a[9] = 0
        } else {
          a[9] = 11 - x
        }
        b = 0
        c = 11
        for (y = 0; y < 10; y++) {
          b += (a[y] * c--)
        }
        if ((x = b % 11) < 2) {
          a[10] = 0
        } else {
          a[10] = 11 - x
        }
  
        if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) {
          return false
        }
  
        if (cpfSize.length < 11) {
          return false
        }
  
        return true
      } else {
        var numeros, digitos, soma, i, resultado, pos, tamanho, digitosIguais
        if (value.length == 0) {
          return false
        }
        if (value.length < 14) {
          return false
        }
  
        value = value.replace(/\D+/g, '')
        digitosIguais = 1
  
        for (i = 0; i < value.length - 1; i++) {
          if (value.charAt(i) != value.charAt(i + 1)) {
            digitosIguais = 0
            break
          }
        }
        if (digitosIguais) {
          return false
        }
  
        tamanho = value.length - 2
        numeros = value.substring(0, tamanho)
        digitos = value.substring(tamanho)
        soma = 0
        pos = tamanho - 7
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--
          if (pos < 2) {
            pos = 9
          }
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
        if (resultado != digitos.charAt(0)) {
          return false
        }
        tamanho = tamanho + 1
        numeros = value.substring(0, tamanho)
        soma = 0
        pos = tamanho - 7
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--
          if (pos < 2) {
            pos = 9
          }
        }
  
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
  
        return (resultado == digitos.charAt(1))
      }
    }
}
export default {
    namespaced: true,
    root: true,
    state
}