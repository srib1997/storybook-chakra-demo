import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/core";


const IndexPage = () => {

  return (
    <ButtonGroup spacing={4}>
      <Button variantColor="teal" variant="solid">
        Button
      </Button>
      <Button variantColor="teal" variant="outline">
        Button
      </Button>
      <Button variantColor="teal" variant="ghost">
        Button
      </Button>
      <Button variantColor="teal" variant="link">
        Button
      </Button>
    </ButtonGroup>
  )
}

export default IndexPage
