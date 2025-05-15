

const smallCircleBaseClasses = `
  absolute
  rounded-full
  border-4 border-[#2D2432]
  bg-gradient-to-b from-[#FFB062A0] to-[#FFB062]
  sm:w-[100px] sm:h-[100px]
  md:w-[120px] md:h-[120px]
  w-[134px] h-[131px]
`;

const leftCirclePosition = `left-[41%] top-[65%]`;
const rightCirclePosition = `left-[53%] top-[65%]`;

const imageBaseClasses = `absolute overflow-hidden`;

const ownerImageClasses = `
  ${imageBaseClasses}
  w-[70px]
  ${leftCirclePosition} translate-x-[55%] translate-y-[45%]
  sm:w-[50px]
  md:w-[60px]
`;

// left-[42%] top-[65%]

const caretakerImageClasses = `
  ${imageBaseClasses}
  w-[70px]
  ${rightCirclePosition} translate-x-[55%] translate-y-[45%]
  sm:w-[50px]
  md:w-[60px]
`;

const styles = {

    
    container: {
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: 'white',
        overflow: 'hidden',
    },
    gradientCircle: {
        width: '110%', // give me the equivalent in percentage for any device 
        height: '70%',
        top: '-30%',
        left: '-5%',
        position: 'absolute',
        overflow: 'hidden', // Makes it so the gradient circle doesn't leak out of the container
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #2D2432 49%, rgba(20.19, 20.19, 20.19, 0.74) 60%, rgba(20.19, 20.19, 20.19, 0.38) 78%, rgba(20.19, 20.19, 20.19, 0) 93%), #FFB062',
        borderRadius: '50%',
        border: '20px #2D2432 solid',
    },
    text: {
        position: 'absolute',
        textAlign: 'center',
        color: '#2D2432',
        fontSize: 20,
        fontFamily: 'Londrina Solid',
        fontWeight: 400,
        wordWrap: 'break-word',
    },
    caretakerText: {
        width: 206,
        height: 72,
        top: '80%',
        left: '51%',
        color: '#2D2432',
        fontSize: 20,
        fontFamily: 'Londrina Solid',
        fontWeight: 400,
        wordWrap: 'break-word',
    },
    ownerText: {
        width: 87,
        height: 45,
        top: '80%',
        left: '42%',
        color: '#2D2432',
        fontSize: 20,
        fontFamily: 'Londrina Solid',
        fontWeight: 400,
        wordWrap: 'break-word',
    },
    footerText: {
        top: '60%',
        left: '47.5%',
        position: 'absolute',
        color: 'black',
        fontSize: 12,
        fontFamily: 'Lexend Peta',
        fontWeight: 400,
        wordWrap: 'break-word',
    },
    smallCircle: {
        width: 134,
        height: 131,
        position: 'absolute',
        background: 'linear-gradient(180deg, rgba(247.56, 3.09, 3.09, 0) 0%, rgba(247.56, 3.09, 3.09, 0.20) 64%), #FFB062',
        borderRadius: '50%',
        border: '4px #2D2432 solid',
    },
    leftCircle: {
        left: '41%',
        top: '65%',
    },
    rightCircle: {
        left: '53%',
        top: '65%',
    },
    image: {
        position: 'absolute',
        overflow: 'hidden',
    },
    largeImage: {
        // width: 628, 
        // height: 471,
        width: 942,
        height: 706.5,
        // left: -100,
        // top: 57,
        top: '-1%',
        left: '28%',
    },
    leftImage: {
        width: 304,
        height: 430,
        left: '36.8%',
        top: '51%',
        position: 'absolute',
    },
    rightImage: {
        width: 262,
        height: 370,
        left: '49.6%',
        top: '55%',
        position: 'absolute',
    },
    lanContainer: {
        width: 43,
        height: 43,
        bottom: '5%',
        right: '5%',
        position: 'absolute',
        overflow: 'hidden',
    },
    lanImage: {
        width: 43,
        height: 43,
        position: 'absolute',
        overflow: 'hidden',
    },


};



const Page = () => {
    return (
        <div style={styles.container}>
            <div
                className="absolute
                rounded-full border-20 
                border-[#2D2432] 
                w-[130vw]
                translate-x-1/2 right-1/2
                md:w-[110%]
                2xl:w-[125%]
                "
                style={{
                    height: '70vh',
                    top: '-30%',
                    // left: '-5%',
                    background: 'linear-gradient(180deg, #2D2432 49%, rgba(20.19, 20.19, 20.19, 0.74) 60%, rgba(20.19, 20.19, 20.19, 0.38) 78%, rgba(20.19, 20.19, 20.19, 0) 93%), #FFB062',
                    borderRadius: '50%',
                    border: '20px #2D2432 solid',
                }}
            ></div>
            <div style={styles.footerText}>By Hotel Bicho Solto</div>
            {/* Círculo esquerdo */}
            <div className={`${smallCircleBaseClasses} ${leftCirclePosition}`} />

            {/* Imagem owner */}
            <img
                src="images/pet_owner.png"
                alt="Owner"
                className={ownerImageClasses}
            />

            {/* Círculo direito */}
            <div className={`${smallCircleBaseClasses} ${rightCirclePosition}`} />

            {/* Imagem care-taker */}
            <img
                src="images/pet_caretaker.png"
                alt="Care Taker"
                className={caretakerImageClasses}
            />
            <div style={{ ...styles.text, ...styles.caretakerText }}>
                Pet <br /> Care-Taker
            </div>
            <div style={{ ...styles.text, ...styles.ownerText }}>
                Pet <br /> Owner
            </div>
            <img
                src="images/logo.png"
                alt="Logo grande"
                className="
                        absolute
                        top-1/3 left-1/2
                        w-[70%]
                        -translate-x-1/2 -translate-y-1/2
                        md:w-[20%]
                        lg:w-[15%]
                        xl:w-[10%]
                        2xl:w-[20%]
                    "
            />

            <img
                style={{ ...styles.lanImage, ...styles.lanContainer }}
                src="images/uk-flag.png"
                alt="Placeholder for large "
            />
        </div>
    );
};

export default Page;