Projeto: Mesa de Luz

Desenvolvimento de uma mesa de luz DIY customizável.
O projeto utiliza variáveis e fórmulas para ser o mais modificável possível, e também uma versão pronta como exemplo.

Variáveis:

#Globais:
- e = espessura da madeira
- f = espessura do acrílico
- g = chanfro para o apoio do acrílico
- a = altura menor
- b = largura
> - b = l + 2 * (s + e)
- c = comprimento (sem e frontal e traseiro)
- d = altura maior
> - d = a + y
- l = lâmpada
- s = soquetes

#Laterais:
- α = ângulo de inclinação de descanso
- x = face da inclinação
> - x² = c² + y²
- y = lado oposto à α
> - y = sen(α) * c

#Base:
- h = largura da base
> - h = b - (2 * e)
- i = profunfidade da base
> - i = c - (2 * e)

#Topo:
- j = largura do acrílico
> - j = b - 2 * (e - g)
- k = profundidade do acrílico
> - k = x + g