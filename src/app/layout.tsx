'use client';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/pt-br';
import { Inter } from "next/font/google";
import StyledComponentsRegistry from './libs/registry';
import GlobalStyles from "./styles/GlobalStyles";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <GlobalStyles />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">

        <StyledComponentsRegistry>  
          {children}
        </StyledComponentsRegistry>
        </LocalizationProvider>
      </body>
    </html>
  );
}
