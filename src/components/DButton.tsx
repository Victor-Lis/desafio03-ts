import { Button } from "@chakra-ui/react"
import type { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler,
    message?: string,
}

export const DButton = ({ onClick, message }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          colorScheme="teal"
          size="sm"
          width="100%"
          marginTop="5px"
        >
          {message ? message : "Entrar"}
        </Button>
    )
}

export default DButton
