# SimpleDEX Frontend


![ETHKipu Logo](https://campus.ethkipu.org/pluginfile.php/1/theme_moove/logo/1730136052/ethkipu-logo.svg)


¡Bienvenido al frontend de SimpleDEX! Esta es una aplicación web que interactúa con el contrato inteligente de SimpleDEX desplegado en Ethereum, permitiendo a los usuarios:

- **Agregar Liquidez** al pool.
- **Retirar Liquidez** del pool.
- **Intercambiar Tokens** (Token A por Token B y viceversa).
- **Obtener Precios de Tokens** de Token A y Token B.


## Características

- **Conectar tu Billetera**: Interactúa con la blockchain de Ethereum a través de MetaMask o cualquier billetera Ethereum.
- **Agregar Liquidez**: Deposita una cantidad igual de dos tokens (Token A y Token B) en el pool de liquidez.
- **Retirar Liquidez**: Retira tokens del pool de liquidez.
- **Intercambiar Tokens**: Convierte Token A en Token B o Token B en Token A.
- **Obtener el Precio de Tokens**: Consulta el precio actual de Token A y Token B.


## Demo en Vivo

Puedes probar la aplicación aquí: [SimpleDEX](https://agosvenezia.github.io/Ethereum-SimpleDEX/).


## Requisitos

- **MetaMask** (o cualquier billetera Ethereum) instalada y configurada en tu navegador.
- Integración con **Web3** para interactuar con la red de Ethereum.


## Instrucciones de Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/AgosVenezia/Ethereum-SimpleDEX.git
    cd Ethereum-SimpleDEX
    ```

2. Abre el archivo `index.html` en tu navegador. La aplicación intentará conectarse automáticamente a tu billetera Ethereum.

3. Una vez conectado, podrás:
    - Agregar liquidez al pool ingresando las cantidades de Token A y Token B.
    - Retirar liquidez especificando cuántos tokens deseas retirar.
    - Intercambiar tokens (Token A por Token B o Token B por Token A).
    - Consultar el precio de Token A o Token B.


## Cómo Funciona

### 1. **Conectar Billetera**
El botón "Conectar Billetera" permite a los usuarios conectar su billetera Ethereum (por ejemplo, MetaMask) a la aplicación. Una vez conectado, se muestra la dirección de la billetera y el usuario podrá interactuar con el contrato.

### 2. **Agregar Liquidez**
Los usuarios pueden depositar Token A y Token B en el pool de liquidez. El contrato inteligente acepta estos tokens y los agrega a las reservas de liquidez.

### 3. **Retirar Liquidez**
Los usuarios pueden retirar liquidez especificando las cantidades de Token A y Token B que desean retirar del pool.

### 4. **Intercambiar Tokens**
Los usuarios pueden intercambiar Token A por Token B y viceversa. La aplicación llama a las funciones del contrato inteligente según la dirección del intercambio (Token A a Token B o Token B a Token A).

### 5. **Obtener el Precio de Token**
La función "Obtener Precio" consulta el precio actual de Token A o Token B desde el contrato.


## Visión General de los Archivos

- **index.html**: El archivo principal de HTML que proporciona la estructura y los formularios para interactuar con el contrato de SimpleDEX.
- **styles.css**: Estilos personalizados para el frontend.
- **scripts.js**: JavaScript para interactuar con la blockchain de Ethereum, incluyendo funciones para agregar/retirar liquidez, intercambiar tokens y consultar precios.


## Problemas Conocidos

- La aplicación requiere MetaMask o una extensión de billetera Ethereum para su funcionalidad completa.
- Algunas funciones pueden estar limitadas según el estado actual de la blockchain (por ejemplo, tarifas de gas o congestión de la red).


## Contribuciones

Siéntete libre de bifurcar este repositorio y enviar pull requests. ¡Las contribuciones son bienvenidas para mejorar la funcionalidad o agregar nuevas características a la aplicación!


#### [A project by Agostina Celina Venezia Napolillo for Ethereum Developer - Talento Tech](https://campus.ethkipu.org/)