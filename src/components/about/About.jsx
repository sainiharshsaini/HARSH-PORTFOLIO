import './about.scss'

export default function About() {
    return (
        <div className='about'>
            <div className="aboutme">
                <h1>
                    About Me
                </h1>
                <br />
                <p>
                    I am a Student from Roorkee, India. working in Web Development. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                    <br />
                    <br />
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. 
                </p>
            </div>
            <div className="whatidoing">
                <h1>What I am Doing</h1>
                <div className="about-card">
                    <div className="card">
                        <img className="card-img-top" src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">WEB DEVELOPMENT</h5>
                            <p className="card-text">High-quality development of sites at the professional level.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFRUXFxgVFhUVFxUYFRUXFhUVFRcYHykgGBolGxUVITEhJSkrLy4vFx8zODMsNygtLisBCgoKDg0OGxAQGy0lHR4tLS0tLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKMBNgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABJEAACAQMCAwQGBgUICQUAAAABAgMABBESIQUxQRMiUWEGBzJxgZEUQqGxwfAVI1LR4SQzYnJzgrPxCDVDVHSSk7LTFyVTZJT/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAtEQACAgICAAMHBAMBAAAAAAAAAQIRAyESMUFx8AQTIjJhofFRkdHhI4GxBf/aAAwDAQACEQMRAD8A52I1oWzb1lxtR1u24rNI9JHRWjVsWT71z1s9bFpMF99ZMiHjtHV2UoXBPyrWi4rnnXHR3fnRcd3UoylHonLGn2jqL++wBp6ise5c4JBoO4u+6N6CueJHG1Py5tuQI42lURri5dDqAKnoRWXecZkPNlbcEhlG+CThscxljWlZ8SllcRoEzz72QNqzLqyZC3aW/aFiGBQk6O8w04GNWdJ+VacWNpXFuiWTJBPjkir+5jXd3G66TCivt+sBYDludCDHPB69fLFLWtswGLlkbA1akJUnrpIxtzxn41K5EJOCZIzn6wHUnPd6YwBz6+VAXFoC4RHV89RkDx6/dWuCfiZ58X8ra9fWwK5hwXKlWVWIzlQWGcBgoOSDtyzVN/wyZNmhkX+6SNhk4IGOXnRd1wmZSQUzsD3cN7Q8BueR+VDvxa4RSBK+CCMMdQIxyGrPj9taIx1shPJJ/I0zIkTG3I9Qdjt76oZT4VuJ6QEg9tEkqnPd3TcvrJyOpNUQG0eTVJqhjwBojLu2cjLFmB2I1ct+Vasa0Zp5Zq+Uf23/AGYwpzXVWPo1HPqMV5Gwz3QykOV6FgcEH4Grbr0NZPrg+4VtjFsxS/8AQwKXFun5M5LFICtifgTr1FDtwxh1FCcWaI+0Y5dMz6QFEPaMOlVFD4VFxLKSfRDFB3XtVZIuSd6pmQjnWbJK1VFYoqNRqVRNRHImo1I02KJxGrrP2xvVR99W2bYYH8700ezjWIznl51n2e0n5860vjWfaj9Yfz41qktoTwNDfwFZ/EgfI+AHPzNaJNQaEE5PhTyjaoCOfpCjrqEHJUY3oGsjVDj0s01KgAlTUqagA7pGouB9xWejUVC+9ec0esmbkEuKJhn3rKjkq6KXepSgGMjejuaIjuqwxNVsc9SeMop6NqS6yuKKWxVl5mud7epScTkVcBsU2OCT2TzSm0uDoa4jftSiZZgTjTz+ygp7uVSAzyAg5AYtsRyIB95rU9HuJ9/Q0iRghj2jAZB+O3+VaXFLqYlQk9tKDoXDAd5stywTjIUE5IG4rXjxLjdmLN7RNT4yin68jlJeLyFOzZiU222BwBgDVg9Mc88hUv0jAQFa1XYAalYqxxjdsDDHbyzRkwZYw0lrGV7pMiFO9uGzgeK52HQ+VA3ccGglUnRiAV1AaDn/ADOMeVaIRZmnPHLXGt+D/hjW08He/WyxkuSAANIXfC5GTtk+R8KHurYzDSt1G5DFgHBjJICqSOYOdufPBPjQ08KhciQatsqVZSD1GeW1WfoNpF1xOjjfY5VtgScrg4Gx3zg1oitGfIoRfLlXmv6BoLUzSY+jhwjP2vYsBq1AkAHkMYP3UJfWkA/+aLIGNaZ/ZG+/mze4ct6vSwvI9gsowSB2ZJ5HcDQfI1WeP3IXSX7o2wVA3HXlnNVx/KQlzcrg015/kqi4OWcCKVX2zqGQF8ifHyol+JXFu+hn1AeJz9tBwcYBdmeMHW4dsEjG+SBvyNb83EbSX2Ywp8G51rhONaezLmc1JLJDkvJA6cXD8xipTyAiq5Y15iOsy7cgcsU88mhMeOEn8Og+WhHC+VAS3jcqpEnhtWeWfdJG2GFohLhm2G+aq4hHggZ6VdPJyPWhppNXM5rNJaf6myLZQkeTipGErz3Bp4gdWyk0SzgKV652BpIr9SlmanuqRBPQU5gYc1NOsRHQfOhQSOnnnT5VdYHvYOPGoiLx0/OrbRMP0p4raONAj3VnLIEfJ8OlaLkAb4ArNmmRd9mPgDyq+TVMRF7cRXwb7KeO91kgAjbrQ0d8vVdvnV2uMYI2zQ5t+IaJFNqy5kwa1xQt5FtmpyWgmeaenq+O2yMk4zypKAD0qIntdPWlQo46dGq+Ft6DVqvhbesNHpWaqNU433oZGpI+9I0BGh2lWRSUCZKsikoJINhjSbipzQSFchCaE7bDCuosONwovePhTNULbMr0QEhugEiSRtLd2Q6RjbyP3da1ePW51Lr4dnGnPZMW0rrlyoCAd4n37LUb3jUMisttGzTkd0xq2oDO5yN6Bjt27gur94WJVoQWLjbVlm1EaSCSN8czueVUg9UQyRblyALhYQgASZJMjuSFREDvk98bgNkb45+Oa17IuyqEvFOAMoUGIzgZVW5EDlkeFDTvqjWFeIRyISqhTmInYqNTYJCgADfb2fKtfh+sDR2Vu4RAAY85IVinekIAYjRnPnWnH2ef7VFuHp/9MpLJyX/Uwy5ckk4DNk8wSds+FYt7DEkja4mjPZ+xGSSD0fVnlnmPxrfvUVCRLA4ZssNLAkA59kDoK43iMoJJjLqOzZSCoMm43BIXIQ+Oa0zqKtGPEpuTv168iHD+IFGT+USqC2GIydI5akznp5VbNMWidYZ49OS7KNaMxK94YPMEbY5bchWXZT5aMGUJjVuw2TY+PPNasUXc/wBjJtsqNgnu9Tn2vGpwbaKZopOzn9YJJwBkk4A2GTyHlTvKBz+6nuH0yN3dOG9nOdPlnrVN3KGOadZWlo0LbWjRj4ppHMmqbniAcfGg2dcVWSKPv5tULHFG7oLNuzbjG/nSW1bxH21VDOcYBqfbN4mnXB72NTJtZseo+2ofo1vEfbSeUj65+3ao/SD+0ftotQ8UFcidpCVPLcHepyR4YnGT0q+JsjOef5NBTzyaiBjAOPzvXOCURk22WX65j5eFZoG3sj51bcyuww2MZ6YoVox0JqeTbseOkXLGf2V+dThyGBIHn8qGA6ZPyFNLyJzvypKoeyN3clznp0H561XGmaeGMtkAZrQt7YjmByoJOTsBmuMUTw9SSfDHXxqV5AoPhRtnDpXHXmaaMPiOIwqetWumRipimc1RRSRxkGAhsedaMqYAJ6UHNJ3s0f7QHwNTSRzGkwQM0qovJgDSrnLYKNMNV8TbihAauhO4rz6PQNMNTI29QU1BW3NTY6QWXqUb0OzUo2oDUEO+4p7lu7Q43dR4muqs+ARyLuT86TJljjrkGONyugP0CZhddyZIjobvONQO42xke/n0rqeONd6kxPZyZZAdS6e0bVKQmMsCvNt8dKyrDgi2TPcSBZo1Q9xsE8xuM7eVCXF/bXWGi4ZIyoVVuzB7q5diF7MjvHI552FdDKpu49E5wpbK+JQy/Rw0lrbhDpzcR9kSwK5yqhlyWGG28/cD/RnhkVxJHCttLEzR6u1Zn0yaVB143C554Hz61zt+YFjGmG5il22kx2KnBDE61JYasgZxsfEEne9WFyG4jEBPI57B8oRhFOkD9Xju6egx4VsjKujHOKa2dTN6tpGyfphU5OnEbHSM7Dd81znGPVReKDJFdJO6gMoKtGxK7hV1Mw8eZxXofrD4vLacPmngZFkTs9JkGVGuVEOR7mPxof1Z+k0nELLtZggkSRonMedDFQrBlzy7rjPnmi8s32yaxRXSPAxfTh+zlCa8lXEoIZTHnZwfZP31GeEsozAq7hsruWGM4IHQ/Pauz9c9gq8ThZI1LSwqzjbvlGZe9nb2FAzjpXFC2wpPYyqcbFWON15kc8E55bVWHxIzZIKL16+503of6BHikUsqSLb9nMYtLI8hOFV8sdQ3w4HwrbPqOm/36P8A6Df+SsH0B9YX6Khlie2eUvMZM9oEx3ETBBBOe5n417r6McYF5aw3ITQJUD6SdWnJO2cDPKpzlJM0wjGtHlH/AKHTf7/H/wDnb/yV5XcqUd0znQ7pnGM6GK5x8K949L/WsthdyWxtGk0aO+JAoOtFfkVPLVXhSRPdXDCGJ5Hlkd1RAWbvMW6dBnc8qpjcvEEkvAGWUg0R2ldNJ6seKhNf0Pz0iWEv8tX2A1y5V0Zo3Uo6nDKylWUjoQdwatCS6sRos59KTHFK2DOwRVZ3Y4VVBZmPgqjc10R9XHFnXK2TY8GkgRv+VnyPjTymkjkrN71Zeg0XEraSeSeVCszRhU0EYVEbPeGc98/IVjes/wBEI+GzQrHK8nao7EvpGCpVQBpA8a9I9Qtq8VlcxSLpdL6VHU4JVlihBBxtzrH9d/B7i7vLOK2iaV+xmOFwMDWm7MSAo8yRWVZZOVN6K8VR4tTlq6P0g9BeIWSdrcW5Ee2XVkkVcnA1aSSvvIxvzrnCasmn0I0LVSIB2PjUMVOFgCCdxR7ODEt8AY28fOikXAqEbZGen58atqsUgsoljBqMkjAE8gOW3OrZDQ5GRqJPkOlI9dBLoJQwqMj52qhCF3zv1/CoM2k+RoctHUPPHVUMpBx0qUswNCs29I2caAtVbfelU7XOKVOkhWEhqtibcULqqyJtxWGjeuzUDVBW3qIaoI25qNFgotSRqqLUo2rq0deyx27wrT/TcyL3WHyrGd+8KlcMdNc4KVWgKbV0dDwC+FzKY7uRzGVJwgO5BHPSM1s8U4lbwNGIbxoQdPswDD+2C8gIXWAAo2zzrnvQBZTcnsmjU6DvJuOY6Cuj9IIrrKZksjkqO8Ma21SERjVkEcyeXIVgzVH2hRWlXV/0NFt47fZzvEuMyNErLxFpX1KViMQLkgEjUASMDJBG4zjpg1r+qu5lfikZkljctDKSATrUnv6WTYKQWPTyrnOKQEW4aSK3CHTmaIQ6nypI07jJbZtvPlyG96pUUcSgK23ZgwSYkLbyDQNyoJAJ51ug9fgxyPZPSngMd/bSWsrMqSaMlNOoaHVxjUCOajpVXBuDxcNtOxtYndYwzBVKmSRjuTlyAWJ8SB7qB9ZvEpbbhs80LOsi9lgpjUNUyKcZ8iayvU/6VTX9tJ9IyXhkCayArOrIGBYAAaue48qqTPJfS/jZur1pLi1lSTuoqEsrIqZym+M823x1NZct13QY2nTfm7HTpxyG53xj7a9G9ffDI1ltLoalZjJE5T2mAXUhGOo7w9zeVcbwzgtxLbidHnMYXd/o7sgCg5AOnLAH6wyPlmtGN2RnDxOW4i6EsysxOfrEZbJO/LbpX0v6rf8AVNl/Yr95r5n4kV1t3w+57w21eeK+mfVd/qmy/sV+80MyobH0eLeuNP8A3W5OOkP+CleseqL0VSzsklZR29wqySMRuFYZSLyABGR4k15F665scUuR/Ri/wUr6RswOzTHLSuPdgYoZGuKSOgts470d9Y0V3xGawWIr2evRIWBEhiYLINOO7vkjc5APKuV9ffBo1WG+CgNq7GQj6wKloy3uKsP7w8K7mzg4RBKZYvoMcuWy6tCr5b2skHO++a5H168Xt5eFlI54pGM0WFSRHO2rJwDypIy4ytDNWqNj1SeikdraJcMg7edA5JG6RuMpGPDbBPmfIVZ6U+tOysZzbussrrjtOxVCI8gHDFmXLYIOBmuy4fjso9PLQmPdpGK+WvSy3P0y715D/SJ9XjvIxB+WKeMfeSbYG+K0ezeo+87e2vZt/wBbxG4k3599Im3+ddB6YemtpwxoRc69U7FQUUHSqkanckjCAuPE7nAO9cr/AKPSY4fOP/uSf4MNct/pJ/z1p/ZTf9yVNrdDeB7ne2qTRvHIAyOrKwO4KsMEfI18fXduY5HjJJKO6Hz0MV/CvsWL2R7h91fIfpEf5Xc/8TP/AIr1XC9sWRnE04NNSFXEDrI52IziiZJQvM1lo5HI0xGedPyaWg2FdqXOBy8asuiFUCm7QKmR8PfQQwfaJPxpG6HSsTPnNVmTbFGxsnQYq9ZFI5A+O321yjfiGUTILVbAnWi76EEak2/aA++ntV/Vg+/PwO1dw2ITjalUSMUqNnEtdTifcUH2lTik3FZWtGlPZsh6rV9zQ3a1Wsu9SSLORotLTJNQTy1BZa5LQHLYbJcbimuLg6edDW7AyKDXd2HDlZO8gIxUM/tEcNNofDilltI4W0R5GCpksfOlNYyg4aNs7DONtzgb8uddaeEW6uDqaJvFc/dyrK4hHiQJHdu0YwZHcKFTG4wpILb56UIe1qcvh+6FyezOEfi+zMDs3B2Vs56A8842+Ndn6k3Y8XTUT/MzHfPgByrA4gFDIEvRIuVLMVxoII7yjwyWOOYCnmMVC0keBtUF+sbhdnjOjAJOpc8zsSf4b1oc7VtfZ/wZKVn096R8Fjvbd7eVnVH05MbBXGh1cYJBxuo6VVwDgdtw6Axw9yMEu7yNkscAF5HbmcADwAAr5xf0z4kAccVkbdfrDB1AknPMYxgjHWse+45czJqnupJsuRoldnA2B1aWOMbY5ffXJWcdj64PTKO+uYlgYmC3b2x/tHYrrdPFQFAB67nlivoaxWMRoItPZhF0afZ0YGnT5YxXyHBeEq3dQ6tjlQcYz7Phz+yibT0vvo4vo8d1KkOCOzViABvkKfaUb8gQKrKD0C0N6ZCP6fdiHHZ/SJtOOXtnOnyznHlX0j6rf9U2X9iv3mvmA3IIwI1HuHLfPWtiz9K7uNBHFdXEaKMKqSvpUf0QCABTyxtoTlTNb10jPF7nb6sP+Clev+qT0wjvbOOJnAuYUVJEJGpggCrKo6ggDPgc+Wfn28v2ndpJpHkc4yzkuzYAAyfcAKFEjKweNmRl3DKSrKfFSuCKMsVoCns+h+P+p/ht1M05E0TOxZxC6hWY7klWVsZPhivLfW/6F2/DZLYWyMEkSTVrYuWaNl3yeWzjYeFYS+nHEwNIv7jH9fJ+Z3rI4hxKaY6p5pJT0MsjORnw1E4+FLGDT2M5I+h/U/6Yx3lnHA7AXMCCNlJ3dEACSr+0MYB8DnxGdjj/AKv7C8m7aaE9ocamR3j14AA1hTucADPPAFfL0UjZEgkKFTlShKsD4qRyrooPTa+C6fp9xjHWRs4/rc/jmu9270w2j1/1GW/Z2l3H+xfzr/ypEv4Vx3+kl/PWn9lN/wB6Vxthxm6hVhDdTRhmLtokddTNzdsHdjgZPWh+K3k11j6TNJKVBCmR2YgHmATyG1N7ht2Dlo+sIvZHuH3V8g+kZ/ldz/xM/wDivW2npNxAbfTrr/ryfvrNaMMxZhlmJJJ3JJOSSTzJNPjwSQJSTMTXUkUnkCfga0r1caf6w/P2UrUY6Hry3qnDdCgQhf8AZ5+OKkbZ+uke81oLvk8ugyDsOv2/hUki68z4mm4HGTjGc+NIirrxcP8AAVQak1TNC6GNTglwfsqFQNLdHGnFKPz1oy2RQuF5b/bWGslGW8+dj18OdXx5EJONl95Fp3HL7qVEaFAxk/Ek0qZ402SswC9Sjfeh806NvWMumaPaVWJN6r1VANvU0ijYU0lMr1QzUlajQthlm/6xa9I4HIpTmc42ry2F++K6ux4yUX2gBXn+34XkSo2exZo45NyOkvb6ZXCoiE74LULJb3jKuq3s2B0LrkIY7uSMgjllt8Vini0UjDVqdt9lNC38kYaPTbak0qJNaP2gYOc6WyM6sgVmw4HFpVvy/tF/aMynFtP1+wbY2M0Z1CGFmYoS0hTCajpBVVwUBLcsdBtsRWz6pIXkvLoKiRfySYk6AwwZVXSivyXcjbbuDNcjJ9HycW8+D4gFs6wdug7oYfHyzR/oR6Tpw+4lljtZJS8LQ6S+kpqZWYk4IPsDbA5c69Rp7b9fc8hL16R3fCfVza3FvbEy4nuLHt41MakKQqlu9+wpnjAHP34rD9WdtGLa+4nJbRPJbRL2KOo0BuzyXK8uiHPPdsHequGetMwtaFLFn+i2jWu8pBcsIe9tGdOOw5b8zyxvz3oR6VPw1pR9H7e3niVJon9l+7sdWCBs7bEHZvkFGgnW8E9FTxTtL+/m+jmedLeJbdF0tIEVQ2CThcjGOZIY55VZwn1SQlQbq6ljc3ctviNFKuV1dmynfSGC6t8+HOgeD+syG3aWP9G/qBOtxDEJTmCVQq51adwSurfqzc81Kb1oNEIhJZsWF217lpQurX2mEACnSBrxnJ9nlVOUqoFINuPVPADb9neSSBrtrWY6FXSyiTJjB8GjxvnOc0916qoNcIhu5JFN21rOSiqY2CswKZ22KqDzzqyMVH0Y9Y6XFzBA8AhVuIPdGRphpTX2h0HKjYah3sj3VZ6W+shYrnsrWGNVhvXndhIWW5YZGc47oYMeWdwMcsFlKfQGkVxerq1jaOSaaVk/SX0Qrhe+NbKmcYI1MFBxyDGieMegVpNxC6S3aWOG2jV544YtThmjUxRWy/WLBWYk539+2V6Q+ssToqQ2aw6buO7DGUvqdG1nUukZ1NncEYq5vWiFupbhbIItxEsdwgncPIyZCSpIqgxsFOnYeHI0/wDk7F+Eu/8ASqBJLwXF48cVssEok0DJhkDF9a4yHHZsBjrjbpQ/qh+jCa8jRofpTACxe5XKMAXzgbHURoJA3x7iKzJvT7Ul/Ets4W7SOMa7mSZoRGpXYyKWfJYtgkYJNZHol6Q29kzPPYJdPrR42eUoYmjyRjCnOSQfgK5qVbCmjo5fQ8yNe3vGJvoiRz9kywR6tUjKhHZjfCYdCOecnlit3jHoU95LZK8zdlFwxZHMcSdppXGiONV9p2JPTpy8eatvWO84u47yyS6huZRLo7RohE6oiKFcAkgLHH4HYnritS29Y8qSQOLcaY7QWsidqf1qjGJFcIDGwx58z765Rm+jtBEfq1ijluVlupUhitYrpHMQ1qj9r2iyJ+0vZHYY50rj1cot2yfSiLRLRbp5mUF1Qlxp0jAJ/Vsc45Dlms9/TfH0wJbvoubYW4El1LM0WBLl9cgJbPa+zkcue9Xv6yX7cSm0VojaLaywtISJVVmOrVo7p77DGDzPwesiO0HcB9XsN1GJUuJzFNJIlswhzgRhsyXG3cUsjKOX1d99vPrlGjZkbYozK3hlSQcfEV2fDPWAsUJt/oZECyM8Cx3c8LRBiWMbSJvIuWY7+PLbNcJcAuCCTqySCTkknfc9ffVYOau/9CuhGRSAW9+Dime5A5cqAVl5HOfPx8KKMIcEk4HTHj+NFSk9I7Q9vfajggeR/A1OPJJJyNsY32NZqJuRWhb3eRpJwfHx/jXQlfZzQPeDD/AfdVBqy5bLny2qo1OXZaPREmmHOk1FWtvkgn4Dy8TQSbdAbojb2ZbfkPHx91aMcYQYUfnzqdJa0xgokXJsQ23PM0qUm9KmuhTmaknOq81JDvWAuE5qIO9LVUQ29Ih2WMaZTTE0Rawg865ukd2UruwrYhtAw3G1UrZLsa1LWLA9qsuXKq0VxY7ezOe3EI1o2GFIcSdmQPcd0+0QB3N89fMCpcUuUUYK5zQo4yAABDH3cYJGcYYNy+GKaCclbV/sdJqLaul/sJl7ikrdZwE5AjI5Lvk8snPXGfLIcLqB/PadgSFRjk9Qfuz51Q1/nSezjGnPQ75Oe9vv/GrG4sx30pnAGy7YBBG393bwyas1Jr8fwRtX+SwSJn+ffpk6Tvsc/aTtVTuM4MjhdI2wc+yOmAMfuFVjiD+XQ4xtsCBty5E0hxFxyIHLoOgA6+4UeL9fgFouIiP13Jzvtz360TfpGyBsylgAO9uANHQkctWdvCs4X7gkhtyQScLvjlnaiZ+KyugV5CwAwAcbbY2x5UyjL1+ANohbQoRuGJzz+rV6xoPqn3daDtnkbZNR8h47n99Wo7YwST5U8RGXnJBA293X3mqsBTufl++pwxySHQq58lFbdp6L4GZT/dX8T+6tGOLl8pKTow+8382Pl+JoiDhmN338un8a6RbNUGFAA8qZ4xjpVnjS2zo2+jHA8BgDpU3cAb0QwBA07g5+zx8qz7511bcwMH31L3tFfd/UaSUnyFO0u2OtUBqaViBkDJqfNjcUGwbilKlAcPujqw3X761DVotSiToz7i3194c+vn4Goo2Bt+etGMMbih5ItW42PUfiKWt/U5lFyCe98/31Q4zRYkHJRqPyUfiaHuIGTfofDpSSXiFFCinNMpzvV0MBbkNvGppXpFLpEbeLU3kNz+6tKCPG55k/5AUooFTl1qzNaYQ49kZStjmkBSNJTVBR6VRY0qBxy9OtNTisBoLs1EGr0t9t6i9v76nyQ2ysmibWcDnVPZU/Y+Vc6aO2aP05R1qMnFiB3aB7DypjBSLHAbnLwCrN1lk/XHC+VEM9kCw0yEYXBB3J1d7nyGNqzOw86iYsfWX7fwouCb7fkjlkaVUjQa6twG0REN3dPad8HEpY6t9iU0jYfVYdc1I39uOVtqyq6ssVGvYsV56RkMNsbHyoKzjiOe0crg7aQTkYO/Lxx86uUWw6yH2SBtnn3lO2OW2RQcY/UG3vRNb+IYxbJyHN2bfvb/aNv6I51Rb3QVSvZI2c95hllyANvl18TVsctuDvG7DfrjPgT3vsqu3njCaWjJOTlgQDjK4wenJh/epkl+jFfmEy8XZn1BI1OrVsu+c6ueckVCx4pJGCqacEk7qG3YBTz8hU34pHqLLbRjOMDmF+z3/Z4UHPcaiMKBhQvvx1PnTQS6cdCvzLDfSZPe3J6AdM45DzNEW0bs2pt88wP39KhZ3JHIID/UQn5kedGrxB+pHyH4Vpx4l3Qrf1NqxvigwI1UeA/HxrS/SAI3FcuL3xxU24jtt863Y5RijPkt9Gzc3yjnWbc3IfY5x4AkVnNPUe2qc58hoWg0OApUEjP2e6gZogBkGkZfLJ8KktuTux+AqLin0inJgwkNJmNFPa/s/I/hVJXGxGKlKLiOnYIc5zWzbTalBrOY1bbSaT5GuxypnNGi1DyLVoaq5DVpbERSrkZpFmPT5/jUo1yfd99SiODg+J59T+cUOB3IrhsgNzv5dP40UDUSarZvCqJKPQpZJyIqvXtUS9Vmg2AKzSU1WjbVMGjZw+aVRzSrrOOaqUfMVCnBrAaDYixVr4rMS4FT+mCoODHUgwgVAmhGvKg1yfCuWNncg9DTTsMUAJj41BnJ5mnWLYrkMWzTUqVVEFSzSpq4I+afNRpUDiQpyaY0krkAvtm3q9pwPM0ETTqM8qosjSoDRa8hPOmVyORqcdsx6UWvDj9b4jr/CuXJgbSBVlJ6ZouGMnnt9tMEC8vz7zVgb8/uFXhH9RGXIAOX5+NTzVOr89f4UzygczVboFBBf4+78aqnuFA338qEaZm9kbUMdufPzqM8v6DKJaXHTaol6rJpqzlLNC0uM7HnV5aslXIORRqTahVscvARlyP9/4UzvqGeqn5/kVQ0n2fvqSPhvI/kU9isIEoIqDMOtUl8E/kU2VNHkcXM3v/PuqvtD4UPJgfwqouam50dRqRnarA1BxSbVaXqiYCxmp6GMlPXcjqMWnpUqxmgVPSpUQCq4IKVKgzhxGKn2Q8KVKgEHYb01KlTCirR4PapJr1jOAuNyOZ35UqVJldRY8ezasuEwnGUzuOZb+n5+QobiESrA7Kihu4MhVyAVjBxt5n50qVYuTcitaM/j8hMrA9HkA/wCaq+FQqxkDDOIZWHMbqhIO3nT0q24flRGXZpcE4dE65dc94DmeWmbwP9BflU3gVZWVVAACj7BSpUF8wZfIaZjCxZAAO+/XYZ59Kzrs5PwFKlWxGRGYDknNODtmlSp0OSmOBtQkW7b70qVTydoKNBaTLnnvSpVQABcIAdqqp6VZn2UGNThO4pqVBdnFvU+6mB5UqVVZNkHNQJp6VIwojSpUqUIRAdquNKlVo9CsY0qVKiA//9k=" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">BTech CSE</h5>
                            <p className="card-text">Learing basic concepts of Computer Science Engineering</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}