import './demo.scss'

export default function demo() {
    return (
        <div className='demo'>
            <img src="https://www.shutterstock.com/shutterstock/photos/2274412231/display_1500/stock-vector-many-rainbow-gradient-random-bright-soft-balls-background-colorful-balls-background-for-kids-zone-2274412231.jpg"/>
        
            {/* <picture>
                <source srcset="https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" media="(max-width: 600px)"/>
                <source srcset="https://images.pexels.com/photos/4022082/pexels-photo-4022082.jpeg?auto=compress&cs=tinysrgb&w=600" media="(max-width: 1500px)"/>
                <source srcset="https://images.pexels.com/photos/4033321/pexels-photo-4033321.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                <img src="https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Flowers"/>
            </picture> */}

            {/* ------------------------------------------------------------------- */}

            <div className="box">
                <div className="left">
                    Left
                </div>
                <div className="centre">
                    Centre
                </div>
                <div className="right">
                    Right
                </div>
            </div>

            {/* ------------------------------------------------------------------- */}

            <div className="wrapper">
                <main className="main">
                    <h1>MAIN</h1>
                </main> 
                <aside className="aside">
                    <h1>ASIDE</h1> 
                </aside>
            </div>

            {/* ------------------------------------------------------------------- */}
            {/* The CSS Position Property */}

            <div className="wrapper1">
                <div className="position1">
                    This is positioned static
                </div>
            </div>
            
            <div className="wrapper2">
                <div className="position2">
                    This is positioned relative
                </div>
            </div>

            <div className="wrapper3">
                <div className="position3">
                    This is positioned fixed
                </div>
            </div>

            <div className="wrapper4">
                <div className="position4">
                    This is positioned absolute
                </div>
            </div>

        </div>
    )
}
