function Nav() {

    return (
        <nav style={{ background: "#111827", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><img style={{ display: "block", height: "3.5vh", width: "3.5vw" }} src="https://flowbite.com/docs/images/logo.svg" alt="" /><a style={{fontSize:"1.5rem"}} href="">GeekFoods</a></div>
            <div style={{ display: "flex", justifyContent: "space-between", width:"30%" }}>
                <a style={{color:"#397beb"}} href="">Home</a>
                <a href="">Quote</a>
                <a href="">Restaurant</a>
                <a href="">Foods</a>
                <a href="">Contact</a>
            </div>
            <div className="btn">Get started</div>
        </nav>
    )
}

export default Nav