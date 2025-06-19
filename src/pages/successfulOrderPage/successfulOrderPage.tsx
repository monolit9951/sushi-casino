import { Button } from '@chakra-ui/react'
import './successfulOrderPage.scss'
import { useNavigate } from 'react-router-dom'

function SuccessfulOrderPage(){
    
    const navigate = useNavigate()
    const handleHomeButton = () =>{
        navigate('/')
    }

    return(
        <div className="successfulOrder">
            <div className="successfulOrder_container">
                <div className="successfulOrder_suggest">Dziękujemy za zamówienie</div>

                <Button color="white" bg="blue.100" w="60% 80%" onClick={handleHomeButton} alignSelf="center">
                    Powrót do strony głównej
                </Button>
            </div>
        </div>
    )
}

export default SuccessfulOrderPage