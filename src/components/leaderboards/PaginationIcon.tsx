import { useState } from "react";
import { Button, Stack,Text } from '@chakra-ui/react'

interface PaginationIconProps {
    pageSize: number;
    parentPageSetter: Function;
};

interface PageProps {
    page: number;
};

const PaginationIcon: React.FC<PaginationIconProps> = props => {

    const pageSize: number = props.pageSize;
    const [currentPage,setCurrentPage] = useState(1);

    function changePage(destination: number) {
        props.parentPageSetter(destination);
        setCurrentPage(destination);
    }

    const PageButton: React.FC<PageProps> = (props) => (
        <Button 
                w="58px" 
                h="56px" 
                borderRadius="10px" 
                background={props.page == currentPage ? "#FFA06F" : "transparent"} 
                onClick={() => changePage(props.page)}
            >
                <Text fontSize="40px" fontWeight="500" color={props.page == currentPage ? "#FFFBF2" : "#000000"}>
                    {props.page}
                </Text>
            </Button>
    );

    const PreviousButton = () => (
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

    const NextButton = () => (
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

    const LastButton = () => (
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

    const FirstButton = () => (
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

    const Buttons = () => {
        let buttonsToRender : number[] = [];

        let firstDisplayedPage = Math.max(1,Math.min(currentPage-2,pageSize-4))
        let displayFirst: boolean = firstDisplayedPage > 1 && pageSize > 5;
        let displayLast: boolean = false;
        let count = 0;
        for (let i = firstDisplayedPage ; i <= pageSize ; i++) {
            if (count == 5) {
                displayLast = true;
                break;
            }
            buttonsToRender.push(i);
            count++;
        }

        return (
            <Stack direction='row' spacing="47px" fontFamily="Alegreya Sans">
                <PreviousButton />
                { displayFirst ? <FirstButton /> : null }
                { buttonsToRender.map(pageNumber => <PageButton page={pageNumber} />)}
                { displayLast ? <LastButton /> : null }
                <NextButton />
            </Stack>
        );
    };

    return (
        <Buttons/>
    );
};
  
export default PaginationIcon;
  