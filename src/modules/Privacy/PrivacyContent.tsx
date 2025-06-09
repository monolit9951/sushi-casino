import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

const PrivacyContent = () => {
    return ( <Container
            maxW="container.xl"
            my={24}
            display="flex"
            justifyContent="center"
            fontFamily="'Roboto', sans-serif"
        >
            \<Box maxW={{ base: 500, lg: 1150 }} minW={{ base: 'auto', lg: '80%' }}> <Heading
            as="h2"
            fontSize={36}
            fontWeight={700}
            color="cyanBlue.800"
            mb={8}
            fontFamily="'Roboto', sans-serif"
        >
            Polityka Prywatności </Heading>


            <Flex
                borderRadius={16}
                flexDir="column"
                gap={6}
                maxW={900}
                bg="rgba(255, 255, 255, 0.7)"
                p={6}
                color="cyanBlue.800"
                fontWeight={500}
                fontSize="md"
                whiteSpace="pre-line"
            >
                <Heading as="h3" fontSize={24}>
                    §1. Postanowienia wstępne
                </Heading>
                <Text>
                    1.1. Polityka Prywatności została przygotowana przez NEPTUNES SUSHI DELIVERY SPÓŁKA Z O.O., spółkę z siedzibą w Rzeczypospolitej Polskiej, NIP: 5242990546, z siedzibą pod adresem Michała Kleofasa Ogińskiego 11/9, 01-391 Warszawa, oraz z lokalem użytkowym przy ul. Dolna 41, kuchnia 3, Warszawa, jako właściciel i operator serwisu https://neptunessushi.com/ (dalej „NEPTUNES” lub „my”, „nas” lub „nasz”). W Polityce prywatności wszystkie nasze produkty, usługi, strony internetowe i aplikacje określamy łącznie jako „Usługi NEPTUNES”.

                    1.2. Szanujemy potrzebę prywatności i ochrony informacji dotyczących osób, w tym między innymi wszelkich danych osobowych. Dane osobowe na potrzeby niniejszej Polityki prywatności oznaczają wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej.

                    1.3. Dane osobowe przetwarzamy zawsze zgodnie z Polityką Prywatności oraz obowiązującymi przepisami prawa, takimi jak RODO.

                    1.4. Prosimy o uważne zapoznanie się z Polityką Prywatności aby zrozumieć, w jaki sposób zbieramy, przetwarzamy i chronimy dane osobowe, jeśli korzystasz z Usług NEPTUNES i jakie masz w związku z tym prawa.

                    1.5. Na potrzeby niniejszej Polityki Prywatności i jeśli z kontekstu nie wynika inaczej, będziemy uważani za administratora danych osobowych.
                </Text>
                <Heading as="h3" fontSize={24}>
                    §2. Prawa osób, których dane dotyczą
                </Heading>
                <Text>
                    2.1. Zgodnie z RODO, każda osoba, której dane są przetwarzane, ma prawo do:
                    a) dostępu do swoich danych osobowych,
                    b) sprostowania nieprawidłowych lub niekompletnych danych,
                    c) usunięcia danych („prawo do bycia zapomnianym”),
                    d) ograniczenia przetwarzania,
                    e) wniesienia sprzeciwu wobec przetwarzania,
                    f) przenoszenia danych do innego administratora,
                    g) cofnięcia zgody na przetwarzanie danych w dowolnym momencie – bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem.

                    2.2. Aby skorzystać z przysługujących praw, prosimy o kontakt na adres e-mail: neptunessushi@gmail.com lub telefonicznie pod numerem +48 517 102 069.
                </Text>
                <Heading as="h3" fontSize={24}>
                    §3. Podstawa prawna i okres przechowywania danych
                </Heading>
                <Text>
                    3.1. Dane osobowe przetwarzane są na podstawie:
                    a) zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO),
                    b) niezbędności do wykonania umowy lub podjęcia działań przed jej zawarciem (art. 6 ust. 1 lit. b RODO),
                    c) prawnie uzasadnionego interesu administratora, np. w celach marketingowych lub statystycznych (art. 6 ust. 1 lit. f RODO).

                    3.2. Dane osobowe są przechowywane przez okres do 1 roku od ich zebrania, chyba że obowiązujące przepisy prawa wymagają dłuższego okresu przechowywania.
                </Text>
                <Heading as="h3" fontSize={24}>
                    §4. Odbiorcy danych
                </Heading>
                <Text>
                    4.1. Dane osobowe mogą być udostępniane wyłącznie podmiotom świadczącym usługi dostawy zamówień w imieniu NEPTUNES. Przekazanie danych następuje wyłącznie w zakresie niezbędnym do realizacji dostawy.
                </Text>

                <Heading as="h3" fontSize={24}>
                    §5. Kategorie danych osobowych
                </Heading>
                <Text>
                    5.1. Gromadzimy, przetwarzamy i chronimy następujące kategorie danych osobowych:

                    * dane osobowe,
                    * adres e-mail,
                    * imię i nazwisko,
                    * adres IP.

                    Dane te mogą być wykorzystywane również do przesyłania newsletterów i materiałów promocyjnych, jeśli wyrazisz na to zgodę.

                    Tracking i pliki cookie

                    Używamy plików cookie i podobnych technologii trackingu. Aby dowiedzieć się więcej, zapoznaj się z artykułem 6.
                </Text>

                <Heading as="h3" fontSize={24}>
                    §6. Cele przetwarzania danych osobowych
                </Heading>
                <Text>
                    6.1. Przetwarzamy dane osobowe w następujących celach:

                    a) realizacja usług NEPTUNES;
                    b) działania marketingu bezpośredniego;
                    c) wykrywanie i naprawa problemów technicznych;
                    d) usprawnienie usług;
                    e) prowadzenie analiz na podstawie plików cookies;
                    f) wyświetlanie reklam.
                </Text>

                <Heading as="h3" fontSize={24}>
                    §7. Retencja i transfery danych osobowych
                </Heading>
                <Text>
                    7.1. Dane osobowe będą przechowywane wyłącznie przez okres niezbędny do realizacji celów opisanych w niniejszej Polityce prywatności.

                    7.2. Podanie niektórych danych osobowych jest warunkiem korzystania z usług. Brak ich podania może uniemożliwić świadczenie usług lub ograniczyć ich funkcjonalność.
                </Text>

                <Heading as="h3" fontSize={24}>
                    §8. Ujawnianie danych osobowych
                </Heading>
                <Text>
                    8.1. Możemy udostępniać dane osobowe:

                    a) naszym partnerom i podwykonawcom wspierającym funkcjonowanie Usług NEPTUNES;
                    b) w przypadku transakcji biznesowych (np. sprzedaży firmy);
                    c) w związku z wymogami prawnymi lub na żądanie uprawnionych organów;
                    d) odbiorcom spoza EOG zgodnie z art. 46 RODO – po zabezpieczeniu odpowiedniego poziomu ochrony danych.
                </Text>

                <Heading as="h3" fontSize={24}>
                    §9. Tracking, cookies i adresy IP
                </Heading>
                <Text>
                    9.1. Używamy plików cookies oraz podobnych technologii do śledzenia aktywności użytkowników. Pozwala to m.in. na personalizację usług oraz prowadzenie statystyk i analiz.

                    9.2. Więcej informacji znajduje się w naszej Polityce Cookies pod adresem: https://neptunessushi.com/polityka-cookies
                </Text>

                <Heading as="h3" fontSize={24}>
                    §10. Marketing bezpośredni
                </Heading>
                <Text>
                    10.1. Na podstawie wyrażonej zgody możemy wykorzystywać dane kontaktowe do przesyłania informacji marketingowych drogą elektroniczną.

                    10.2. Można zrezygnować z komunikacji marketingowej poprzez kliknięcie linku w wiadomości lub kontakt z nami pod adresem: neptunessushi@gmail.com
                </Text>

                <Heading as="h3" fontSize={24}>
                    §11. Bezpieczeństwo
                </Heading>
                <Text>
                    11.1. Wdrożyliśmy odpowiednie środki techniczne i organizacyjne w celu zabezpieczenia danych osobowych.

                    Kontakt z administratorem danych możliwy jest pod adresem e-mail: neptunessushi@gmail.com lub telefonicznie: +48 517 102 069.
                </Text>
            </Flex>
        </Box>
        </Container>
    )
}

export default PrivacyContent
