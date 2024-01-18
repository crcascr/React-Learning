function Footer(){
    const year=new Date().getFullYear()
    return(
        <div className="footer">
            <p>Ⓒ {year} #VANLIFE</p>
        </div>
    )
}

export default Footer