import { useState } from "react";
import { Button, Stack,Text } from '@chakra-ui/react'

interface PaginationIconProps {
    pageSize: number;
    parentPageSetter: Function;
};


const PaginationIcon: React.FC<PaginationIconProps> = props => {

    const pageSize: number = props.pageSize;
    const [currentPage,setCurrentPage] = useState(1);

    function changePage(destination: number) {
        props.parentPageSetter(destination);
        setCurrentPage(destination);
    }

    function createPageButton(page: number) : JSX.Element {
        return (
            <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background={page == currentPage ? "#FFA06F" : "transparent"} 
                onClick={() => changePage(page)}
            >
                <Text fontSize="40px" fontWeight="500" color={page == currentPage ? "#FFFBF2" : "#000000"}>
                    {page}
                </Text>
            </Button>
        );
    }

    function createPreviousButton() : JSX.Element {
        return (
            <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background="#FFA06F"
                onClick={() => changePage(currentPage-1 < 1 ? 1 : currentPage-1)}
            >
                <Text fontSize="40px" fontWeight="500" color="#FFFBF2">
                    {"<"}
                </Text>
            </Button>
        );
    }

    function createNextButton() : JSX.Element {
        return (
            <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background="#FFA06F"
                onClick={() => changePage(currentPage+1 > pageSize ? pageSize : currentPage+1)}
            >
                <Text fontSize="40px" fontWeight="500" color="#FFFBF2">
                    {">"}
                </Text>
            </Button>
        );
    }

    function createLastButton() : JSX.Element {
        return (
            <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background="transparent"
                onClick={() => changePage(pageSize)}
            >
                <Text fontSize="40px" fontWeight="500" color="#000000">
                    {"..."}
                </Text>
            </Button>
        );
    }

    function createFirstButton() : JSX.Element {
        return (
            <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background="transparent"
                onClick={() => changePage(1)}
            >
                <Text fontSize="40px" fontWeight="500" color="#000000">
                    {"..."}
                </Text>
            </Button>
        );
    }

    function createButtons() : JSX.Element[] {
        let returnValue : JSX.Element[] = [createPreviousButton()];

        let firstDisplay = Math.max(1,Math.min(currentPage-2,pageSize-4))
        if (firstDisplay > 1 && pageSize > 5) returnValue.push(createFirstButton());
        let count = 0;
        for (let i = firstDisplay ; i <= pageSize ; i++) {
            if (count == 5) {
                returnValue.push(createLastButton());
                break;
            }
            returnValue.push(createPageButton(i));
            count++;
        }

        returnValue.push(createNextButton());

        return returnValue;
    }

    return (
        <Stack direction='row' spacing="47px">
            {createButtons()}
        </Stack>
    );
};
  
export default PaginationIcon;
  