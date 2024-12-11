function Navbar (){


    return(
        <nav className = 'navbar'>
            <h1>PROJECT: BLOGPOSTING</h1>
            <div className= 'links'>
                <a href='/'> Home </a>
                <a href='/create' style ={{
                    color: "white",
                    backgroundColor: '#159130',
                    borderRadius: '8px'
                    }}> New Blog </a>


            </div>
        </nav>




    );
}


export default Navbar;