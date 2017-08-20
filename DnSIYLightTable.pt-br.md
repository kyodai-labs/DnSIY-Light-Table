# DnSIY Light Table - Projetando

A melhor maneira de aprender algo se dá através da experiência! 

Então, como tutorial de projeto, temos um exemplo ao qual você pode seguir modificando variáveis e escolhendo os valores mais apropriados de acordo com dicas que serão dadas.

Este projeto utiliza variáveis e fórmulas geométricas com a intenção de facilitar sua modificação.

Este é o passo à passo de como [Light Table Pronta]() foi criada.

## Notas

O projeto possui a forma de um prisma trapezoidal retângulo. Todas fórmulas geométricas contidas neste documento estão relacionadas à esta geometria. Imaginar as faces da geometria, ou se basear nas [imagens do projeto]() pode ajudar à compreender o porquê de cada cálculo.

_Todas as variáveis contidas neste documento estão relacionadas às variavies contidas em [VARS.pt-br.md](./VARS.pt-br.md); oriente-se por elas._

## Materiais

- **Chapas de madeira**

Serão necessárias algumas chapas de madeira, que podem ser cortadas de uma única chapa maior. 

Para descobrir a área da chapa que deve utilizar, basta somar os seguintes valores:

**Atenção:** a área total não define as dimensões da madeira a ser utilizada, mas já é possivel estimar a quantidade de madeira que o projeto consumirá.

```
Área da chapa frontal (AF)
AF = a * b

Área da chapa lateral (AL) [2 chapas]
AL = (c * a) + ((c * y) / 2)

Área da chapa traseria (AT)
AT = d * b

Área da chapa da base (AB)
AB = b * c
```
Área total:
```
A = AF + AT + AB + (AL * 2)
```

_Utilize arquivo de template [wood_cut.dwg]() para definir as medidas e o corte exato da chapa._


- **Chapa de acrílico**

Uma lâmina de acrílico branca e fina, ela será responsável por apoiar o apoiar as folhas de desenho e absorver um pouco da luz, evitando o contato direto do olho, com a iluminação da mesa.

_Utilize arquivo de template [acr_cut.dwg]() para definir as medidas e o corte exato da chapa._

- **Pregos**

Alguns pregos com diâmetro de sua preferência. Leve em consideração que ele deverá ter mais comprimento do que a espessura da madeira.

- **Lâmpada**

É recomendado utilizar lâmpadas tubulares fluorescentes ou de LED. Elas são fáceis de encontrar, pois são muito utilizadas para iluminar aquários.

- **Soquetes**

Os tipo de soquete variará de acordo com o modelo da lâmpada escolhida, preste bastante atenção aos dados técnicos dela. Considere também soquetes menores, pois isso diminuirá a largura da sua mesa.

- **Fios**

Fios de condução comuns são os suficiente para conectar os soquetes à um plug, que deverá ser conectado à rede elétrica.


## Definindo as dimensões do projeto:

As primeiras dimensões que devem ser decididas são as de itens do projeto que adquirimos prontas e irão influênciar nas outras dimesões. Neste projeto temos o comprimento da lâmpada e soquetes.

Optei por uma [lâmpada fluorescente tubular de 300mm](https://www.castroelectronica.pt/product/lampada-fluorescente-8w-230v-6400k-30cm), por serem fáceis de encontrar e muito utilizada em aquários. Lembre-se de checar qual tipo de soquete a lâmpada escolhida utiliza; no caso da que escolhi para o exemplo, utiliza-se um soquete modelo G5.

Procure pelos soquetes com menor comprimento possível, assim não terá que aumentar muito a largura do seu projeto. Escolhi o [soquete "MT0053"](http://decorlux.com.br/produtos/base-para-lampada-plastico/) para exemplo, e irei definir 15mm para seu comprimento.


Até agora já definimos 2 variáveis:
```
l = 300
s = 15
```
Utilize milímetros como unidade de medida padrão nas variáveis.


Outras 2 medidas importantes são as espessura da madeira e a espessura do acrílico que irá utilizar. Eu recomendo que não adquira madeira com menos de 15mm. Já o acrílico, não recomendo que seja menor que 2mm e maior que 15mm para evitar que fique muito frágil, ou que absorva a luz por completo.

Para o exemplo utilizarei 20mm para a espessura da madeira, e 5mm para a espessura do acrílico, definindo assim mais duas variáveis:
```
e = 20
f = 5
```
Com estas variáveis já conseguimos definir a largura do nosso projeto.
```
b = l + 2 * (s + e)
b = 300 + 2 * (15 + 20)
b = 440
```
A largura do nosso projeto é de 440mm, o que corresponde aproximadamente ao tamanho de um teclado.

Agora podemos definir mais 3 variáveis de acordo com nosso gosto. São elas:
```
c = comprimento (sem contar "e" da chapa frontal e traseira)
a = altura menor
α = ângulo de inclinação de descanso
g = chanfro para o apoio do acrílico
```
Irei definir como:
```
c = 350 (uma área um pouco maior que uma folha A4)
a = 70 (altura suficiente para alojar a lâmpada e não alterar muito a altura da mesa)
α = 10º (pode não parecer muito, mas uma reta com mais de 300mm à 10º cria um plano execelente para se desenhar)
g = 10 (não recomendo que seja menor que 5, nem maior que "e / 2")
```
Com estas variáveis definidas podemos automaticamente solucionar a fórmula das variáveis restantes.

_Para automatizar este processo, desenvolvemos [esta calculadora](), basta inserir as variáveis em seus respectivos inputs_

```
y = lado oposto a α
y = tg(α) * c
y = 0.17 * 350
y = 59.5

d = altura maior
d = a + y
d = 70 + 59.5
d = 129,5

x = face da inclinação
x² = c² + y²
x² = 350² + 59.5²
x = 354.99

h = largura da base
h = b - (2 * e)
h = 440 - (2 * 20)
h = 400

i = profunfidade da base
i = c - (2 * e)
i = 350 - (2 * 20)
i = 310

j = largura do acrílico
j = b - 2 * (e - g)
j = 440 - 2 * (20 - 10)
j = 420

k = profundidade do acrílico
k = x + (g * 2)
k = 354.99 + (10 * 2)
k = 374.99
```
É esta atribuição de variáveis e resolução de fórmulas greométricas que tornam o projeto escalonável. Mas caso queira uma mesa muito maior, provavelmente será necessário criar apoios para o acrílico, ou até mesmo utilizar um acrílico mais espesso, deixando o projeto mais robusto.

### Variáveis finais:

```
a = 70
b = 440
c = 350
d = 129,5
e = 20
f = 5
g = 10
h = 400
i = 310
j = 420
k = 374.99
l = 300
x = 354.99
y = 59.5

α = 10º
```

O próximo passo é passo é desenhar as faces da mesa com os valores definidos. 

Caso prefira desenhar virtualmente, você pode encontrar alguns arquivos prontos para adaptar e escalar [aqui](./images/vectors/). Você pode abrir os PDFs no [inkscape](https://inkscape.org/pt-br/) também.

Se preferir desenhar manualmente, também temos um [layout para folha A4](./images/vectors/PDF/layout/A4_layout.pdf) pronto, basta imprimir quantas cópias acreditar ser necessário.(Para o protótipo inicial eu utilizei cerca de 15 folhas)

Além destas opções, caso você queira renderizar em 3D para ter certeza de que seu projeto sairá como deseja, ou até mesmo imprimir em 3D, deixamos [arquivos em 3D](./CAD/) disponíveis. O uso do [FreeCAD](https://www.freecadweb.org/) pode ajudar muito na hora de modificar as medidas, já que cada operação fica registrada no sketch.

À partir daqui você pode seguir diversos caminhos, como desenhar a madeira e executar os cortes através de ferramentas convencionais, como serras e lixas; desenhar em um software de modelagem 3D e imprimir em 3D; ou desenhar as faces em um software adequado e utilizar máquinas de corte à lazer ou router CNC.
