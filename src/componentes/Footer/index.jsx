import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/marisol.salas.5855'>
            <img src="./img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.twitter.com/MarisolSal59718.com/'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/marisol.salas.5855'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Marisol Salas</strong>
</footer>
}
export default Footer;