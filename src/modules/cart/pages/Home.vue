<template>
  <div class="home-container">
    <div class="home-hero">
      <div class="home-hero-text-container">
        <h1 class="home-heading section-Heading">
          <span class="home-text">Fans:</span>
          <br />
          <span>
            Escucha las mejores canciones y apoya a tus artistas favoritos
          </span>
        </h1>
        <span class="home-text03 section-Text">
          <span class="home-text04">
            Unify es una aplicación web para descargar música a través de NFT (Non-Fungible Token),
            apoyado en blockchain. Cada NFT es un token único que recibirás al comprar la canción de tu preferencia y es la garantía de que la canción es auténtica y has
            apoyado a tu artista.
          </span>
        </span>
        <button class="home-cta-btn anchor button">Empezar</button>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxtdXNpY3xlbnwwfHx8fDE2MzkxNzY5Mzk&amp;ixlib=rb-1.2.1&amp;h=1500"
        class="home-image"
      />
    </div>
    <div class="home-hero1">
      <div class="home-hero-text-container1">
        <h1 class="home-heading1 section-Heading">
          <span class="home-text05">
            Artistas:
            <span v-html="rawf93z"></span>
          </span>
          <br />
          <span>Sube tus canciones y recibe los pagos justos por ella</span>
        </h1>
        <span class="home-text08 section-Text">
          Con la tecnología de blockchain ofrecemos transparencia e
          inalterabilidad. Podrás crear tus canciones, subir la letra, recibir
          crédito y ganancias por ella. Podrás ver en todo momento las
          transacciones en la blockchain. Además en el blockchain se protegerán tus derechos de autor.
        </span>
        <button class="home-cta-btn1 anchor button">Empezar</button>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMxfHxtdXNpY3xlbnwwfHx8fDE2MzkxNzY5Mzk&amp;ixlib=rb-1.2.1&amp;h=1500"
        class="home-image1"
      />
    </div>
    <div class="home-section-separator"></div>
    <div id="NFT" class="home-features">
      <div class="home-container1">
        <div class="home-container2">
          <div class="home-heading-container">
            <h2 class="home-text09 section-Heading">¿Qué es un NFT?</h2>
            <span class="home-text-nft section-Text">
              Sus siglas significan "Non-Fungible Token" o "Token no fungible" en español. Esencialmente es un activo
              digital que es único y no puede ser reemplazado por otro. Además, la información sobre quién es el propietario
              actual queda guardado en la blockchain.
            </span>
            <span class="home-text-nft section-Text">
              En la industria de la música, los artistas crean canciones y pueden crear copias de cada una de sus canciones
              para venderlas. Cada copia puede ser asociado a un NFT, lo cual , como activo digital, la hará diferente a los
              demás al estar asociado con un token único. Al comprar una canción como NFT, aparecerás como propietario de esa 
              copia en la blockchain y será tu certificado para comprobar que has apoyado a tu artista y posees válidamente
              una copia de su canción.
            </span>
          </div>
        </div>
        <img
          src="/src/assets/nft.jpeg"
          alt="image"
          class="home-image"
        />
      </div>
    </div>
    <div class="home-section-separator"></div>
    <div id="features" class="home-features">
      <div class="home-container1">
        <div class="home-container2">
          <div class="home-heading-container">
            <h2 class="home-text09 section-Heading">Sobre nosotros</h2>
            <span class="home-text10 section-Text">
              Somos estudiantes de la Universidad Nacional de Ingeniería
              apasionados por la tecnología
              <span v-html="raw46bj"></span>
            </span>
          </div>
        </div>
        <img
          src="/src/assets/uni-logo.png"
          alt="image"
          class="home-image2"
        />
      </div>
      <div class="home-cards-container">
        <div class="home-feature-card">
          <img
            alt="image"
            src="src/assets/hans.jpg"
            class="home-image3"
          />
          <span class="home-heading2 card-Heading">Hans Acha</span>
        </div>
        <div class="home-feature-card1">
          <img
            alt="image"
            src="src/assets/giuseppe.jpeg"
            class="home-image4"
          />
          <span class="home-heading3 card-Heading">Giuseppe Canahuire</span>
        </div>
        <div class="home-feature-card2">
          <img
            alt="image"
            src="src/assets/diego.jpeg"
            class="home-image5"
          />
          <span class="home-heading4 card-Heading">Diego Hurtado de Mendoza</span>
        </div>
      </div>
    </div>
    <div id="services" class="home-services">
      <div class="home-service-card">
        <div class="home-card-content">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"
            ></path>
          </svg>
          <h3 class="home-text11 bigCard-Heading">Store</h3>
          <span class="home-text12 card-Text">
            Compra nuevas canciones mediante smart contracts
          </span>
           <router-link to="/store" class="home-navlink button anchor">
            Ir
          </router-link>
          
        </div>
      </div>
      <div class="home-service-card1">
        <div class="home-card-content1">
          <svg viewBox="0 0 1024 1024" class="home-icon02">
            <path
              d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z"
            ></path>
          </svg>
          <h3 class="home-text13 bigCard-Heading">Ranking de canciones</h3>
          <span class="home-text14 card-Text">
            Las canciones más descargadas. Mira cuánto apoyo recibe cada arista
          </span>
          <router-link to="/ranking" class="home-navlink button anchor">
            Ir
          </router-link>
        </div>
      </div>
    </div>
    <div id="contact" class="home-contact">
      <div class="home-content-container">
        <h2 class="home-text15 section-Heading">Dónde encontrarnos</h2>
        <div class="home-container3">
          <div class="home-locations-container">
            <div class="home-location-1">
              <span class="home-heading5">
                Universidad Nacional de Ingeniería
              </span>
              <div class="home-adress">
                <svg viewBox="0 0 1024 1024" class="home-icon04">
                  <path
                    d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"
                  ></path>
                </svg>
                <span class="section-Text">Av. Túpac Amaru 210, Rímac 15333</span>
              </div>
              <div class="home-email">
                <svg viewBox="0 0 1024 1024" class="home-icon06">
                  <path
                    d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  ></path>
                </svg>
                <span class="section-Text">unifydappmusic@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="home-social-links-container">
          <svg viewBox="0 0 950.8571428571428 1024" class="home-icon08">
            <path
              d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon10">
            <path
              d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"
            ></path></svg
          ><svg viewBox="0 0 877.7142857142857 1024" class="home-icon12">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="home-content-container1">
        <img
          src="/src/assets/location.png"
          alt="image"
          class="home-image6"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-hero {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxcontent);
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  padding-top: var(--dl-space-space-fiveunits);
  padding-left: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: space-between;
}
.home-hero-text-container {
  width: 35%;
  display: flex;
  align-items: flex-start;
  margin-left: 50px;
  flex-direction: column;
}
.home-heading {
  width: 506px;
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-text {
  color: var(--dl-color-primary-500);
}
.home-text-nft {
  color: var(--dl-color-gray-black);
  text-align: justify;
}
.home-text03 {
  color: var(--dl-color-gray-500);
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-text04 {
  color: var(--dl-color-gray-black);
}
.home-cta-btn {
  color: var(--dl-color-gray-white);
  align-self: stretch;
  text-align: center;
  padding-top: var(--dl-space-space-doubleunit);
  border-width: 0px;
  border-radius: 34px;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-color: var(--dl-color-primary-100);
}
.home-image {
  width: 50%;
  object-fit: contain;
}
.home-hero1 {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxcontent);
  margin-top: var(--dl-space-space-fiveunits);
  align-items: center;
  padding-top: var(--dl-space-space-fiveunits);
  padding-left: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: space-between;
}
.home-hero-text-container1 {
  width: 35%;
  display: flex;
  align-items: flex-start;
  margin-left: 50px;
  flex-direction: column;
}
.home-heading1 {
  width: 506px;
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-text05 {
  color: var(--dl-color-primary-500);
}
.home-text08 {
  color: var(--dl-color-gray-black);
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-cta-btn1 {
  color: var(--dl-color-gray-white);
  align-self: stretch;
  text-align: center;
  padding-top: var(--dl-space-space-doubleunit);
  border-width: 0px;
  border-radius: 34px;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-color: var(--dl-color-primary-100);
}
.home-image1 {
  width: 50%;
  object-fit: contain;
}
.home-section-separator {
  width: 100%;
  height: 1px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-700);
}
.home-features {
  width: 100%;
  height: 520px;
  display: flex;
  max-width: var(--dl-size-size-maxcontent);
  align-items: center;
  padding-top: var(--dl-space-space-tenunits);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-tenunits);
}
.home-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.home-container2 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.home-heading-container {
  width: 697px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text09 {
  text-align: center;
  margin-bottom: var(--dl-space-space-fourunits);
}
.home-text10 {
  color: var(--dl-color-gray-black);
  text-align: center;
}
.home-image2 {
  width: 100px;
  object-fit: cover;
}
.home-cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-feature-card {
  width: 30%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.home-image3 {
  width: 100px;
  object-fit: cover;
  margin-bottom: 20px;
}
.home-heading2 {
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-feature-card1 {
  width: 30%;
  display: flex;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.home-image4 {
  width: 100px;
  object-fit: cover;
  margin-bottom: 20px;
}
.home-heading3 {
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-feature-card2 {
  width: 30%;
  display: flex;
  position: relative;
  align-self: flex-start;
  align-items: center;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
}
.home-image5 {
  width: 100px;
  object-fit: cover;
  margin-bottom: 20px;
}
.home-heading4 {
  margin-bottom: var(--dl-space-space-tripleunit);
}
.home-services {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: var(--dl-space-space-tenunits);
  flex-direction: row;
  justify-content: space-between;
}
.home-service-card {
  width: 50%;
  display: flex;
  min-height: 500px;
  align-items: center;
  border-color: var(--dl-color-gray-700);
  border-width: 1px;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-card-content {
  margin: var(--dl-space-space-fiveunits);
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  max-width: 500px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-icon {
  width: 70px;
  height: 104px;
}
.home-text11 {
  text-align: center;
  margin-bottom: var(--dl-space-space-fourunits);
}
.home-text12 {
  color: var(--dl-color-primary-700);
  text-align: center;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-fourunits);
}
.home-navlink {
  color: var(--dl-color-gray-white);
  width: 80%;
  align-self: center;
  text-align: center;
  padding-top: var(--dl-space-space-doubleunit);
  border-width: 0px;
  border-radius: 34px;
  padding-bottom: var(--dl-space-space-doubleunit);
  text-decoration: none;
  background-color: var(--dl-color-primary-100);
}
.home-button {
  color: var(--dl-color-gray-white);
  width: 80%;
  align-self: center;
  text-align: center;
  padding-top: var(--dl-space-space-doubleunit);
  border-width: 0px;
  border-radius: 34px;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-color: var(--dl-color-primary-100);
}
.home-service-card1 {
  width: 50%;
  display: flex;
  min-height: 500px;
  align-items: center;
  border-color: var(--dl-color-gray-700);
  border-width: 1px;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-card-content1 {
  margin: var(--dl-space-space-fiveunits);
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  max-width: 500px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-icon02 {
  width: 56px;
  height: 77px;
}
.home-text13 {
  text-align: center;
  margin-bottom: var(--dl-space-space-fourunits);
}
.home-text14 {
  color: var(--dl-color-primary-700);
  text-align: center;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-fourunits);
}
.home-button1 {
  color: var(--dl-color-gray-white);
  width: 80%;
  align-self: center;
  text-align: center;
  padding-top: var(--dl-space-space-doubleunit);
  border-width: 0px;
  border-radius: 34px;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-color: var(--dl-color-primary-100);
}
.home-contact {
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxcontent);
  align-items: flex-start;
  padding-top: var(--dl-space-space-tenunits);
  padding-left: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: space-between;
}
.home-content-container {
  width: 50%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-self: stretch;
  align-items: flex-start;
  border-color: var(--dl-color-gray-700);
  border-width: 1px;
  flex-direction: column;
  justify-content: flex-start;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-text15 {
  margin-top: var(--dl-space-space-fiveunits);
  margin-bottom: var(--dl-space-space-fiveunits);
}
.home-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-locations-container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-location-1 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.home-heading5 {
  font-size: 24px;
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-adress {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
}
.home-icon04 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-doubleunit);
}
.home-email {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-doubleunit);
  flex-direction: row;
}
.home-icon06 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-doubleunit);
}
.home-social-links-container {
  display: flex;
  align-self: flex-start;
  margin-top: var(--dl-space-space-fiveunits);
  align-items: flex-start;
  flex-direction: row;
}
.home-icon08 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-doubleunit);
}
.home-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-doubleunit);
}
.home-icon12 {
  width: 24px;
  height: 24px;
}
.home-content-container1 {
  width: 50%;
  display: flex;
  padding: var(--dl-space-space-fiveunits);
  align-self: stretch;
  align-items: center;
  border-color: var(--dl-color-gray-700);
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
}
.home-image6 {
  width: 50%;
  height: 353px;
  object-fit: cover;
}
@media(max-width: 991px) {
  .home-hero {
    flex-direction: column-reverse;
  }
  .home-hero-text-container {
    width: 80%;
  }
  .home-cta-btn {
    width: 40%;
  }
  .home-image {
    width: 80%;
    margin-bottom: var(--dl-space-space-tripleunit);
  }
  .home-hero1 {
    flex-direction: column-reverse;
  }
  .home-hero-text-container1 {
    width: 80%;
  }
  .home-cta-btn1 {
    width: 40%;
  }
  .home-image1 {
    width: 80%;
    margin-bottom: var(--dl-space-space-tripleunit);
  }
  .home-feature-card2 {
    align-self: center;
  }
  .home-locations-container {
    flex-wrap: wrap;
  }
  .home-location-1 {
    margin-bottom: var(--dl-space-space-tripleunit);
  }
}
@media(max-width: 767px) {
  .home-heading {
    text-align: center;
  }
  .home-text03 {
    text-align: center;
  }
  .home-heading1 {
    text-align: center;
  }
  .home-text08 {
    text-align: center;
  }
  .home-heading-container {
    width: 100%;
  }
  .home-cards-container {
    align-items: center;
    flex-direction: column;
  }
  .home-feature-card {
    width: 70%;
    margin-bottom: var(--dl-space-space-tripleunit);
  }
  .home-feature-card1 {
    width: 70%;
  }
  .home-feature-card2 {
    width: 70%;
    margin-bottom: var(--dl-space-space-tripleunit);
  }
  .home-card-content {
    margin: 0px;
  }
  .home-card-content1 {
    margin: 0px;
  }
  .home-contact {
    padding-right: var(--dl-space-space-tripleunit);
    flex-direction: column;
  }
  .home-content-container {
    width: 100%;
  }
  .home-content-container1 {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .home-hero-text-container {
    width: 100%;
  }
  .home-image {
    width: 100%;
  }
  .home-hero-text-container1 {
    width: 100%;
  }
  .home-image1 {
    width: 100%;
  }
  .home-feature-card {
    width: 100%;
  }
  .home-feature-card1 {
    width: 100%;
  }
  .home-feature-card2 {
    width: 100%;
  }
  .home-service-card {
    width: 100%;
  }
  .home-service-card1 {
    width: 100%;
  }
  .home-content-container {
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
  }
  .home-text15 {
    text-align: center;
  }
  .home-locations-container {
    margin-bottom: 0px;
    justify-content: center;
  }
  .home-location-1 {
    margin-right: 0px;
  }
  .home-social-links-container {
    align-self: center;
  }
  .home-content-container1 {
    align-items: center;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>

<style>
:root {
  --dl-color-gray-500: #999999;
  --dl-color-gray-700: #D9D9D9;
  --dl-color-gray-900: #eaeaeaff;
  --dl-color-gray-black: #000000;
  --dl-color-gray-white: #FFFFFF;
  --dl-space-space-unit: 8px;
  --dl-color-primary-100: #3a26efff;
  --dl-color-primary-500: #8469deff;
  --dl-color-primary-700: #9a91e2ff;
  --dl-radius-radius-round: 50%;
  --dl-size-size-maxcontent: 1414px;
  --dl-space-space-halfunit: 4px;
  --dl-space-space-tenunits: 80px;
  --dl-radius-radius-radius2: 2px;
  --dl-radius-radius-radius4: 4px;
  --dl-radius-radius-radius8: 8px;
  --dl-space-space-fiveunits: 40px;
  --dl-space-space-fourunits: 32px;
  --dl-space-space-doubleunit: 16px;
  --dl-space-space-tripleunit: 24px;
}
.button {
  color: var(--dl-color-gray-black);
  display: inline-block;
  padding: 0.5rem 1rem;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.textarea {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.input {
  color: var(--dl-color-gray-black);
  cursor: auto;
  padding: 0.5rem 1rem;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 4px;
  background-color: var(--dl-color-gray-white);
}
.section-Text {
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}
.card-Text {
  font-size: 16px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 400;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}
.bigCard-Heading {
  font-size: 36px;
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}
.content {
  font-size: 16px;
  font-family: Arial;
  font-weight: 400;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}
.card-Heading {
  font-size: 24px;
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}
.anchor {
  font-size: 18px;
  font-style: normal;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.55;
  text-transform: capitalize;
  text-decoration: none;
}
.section-Heading {
  font-size: 48px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 1.22;
  text-transform: none;
  text-decoration: none;
}
</style>
