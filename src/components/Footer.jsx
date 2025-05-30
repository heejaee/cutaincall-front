import {Box, Typography, Link, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const handleInquiryBtn = () => {
        navigate("/faqs");
    }
    return (
        <>
            <Box sx={{paddingBottom: "500px"}}/>
            <Box
                component="footer"
                sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    backgroundColor: "#f5f5f5",
                    padding: "40px 0",
                    width: "100%",
                    height: "auto",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        textAlign: "left",
                    }}
                >
                    {/* 회사 정보 */}
                    <Box sx={{maxWidth: "30%"}}>
                        <Typography variant="body2" color="text.secondary">
                            <strong>커튼콜(주)</strong>
                            <br/>
                            대표이사: 함기용, 심은미, 손홍인, 박희재, 김유성
                            <br/>
                            사업자등록번호 585-18-34303
                        </Typography>
                    </Box>

                    {/* 고객센터 */}
                    <Box sx={{textAlign: "center", maxWidth: "30%"}}>
                        <Typography variant="body2" color="text.secondary">
                            <strong onClick={handleInquiryBtn}
                                    style={{color: "#1976d2", cursor: "pointer"}}>
                                365고객센터&nbsp;
                            </strong>
                            | 언제든지 눌러주세요
                            <br/>
                            <Typography component="span" sx={{fontWeight: "bold", fontSize: "18px"}}>
                                1843-6134
                            </Typography>
                            <br/>
                            서울특별시 강남구 선릉로 433
                            <br/>
                        </Typography>
                    </Box>

                    {/* 이용 안내 */}
                    <Box sx={{maxWidth: "30%"}}>
                        <Typography variant="body2" color="text.secondary">
                            <strong>홈페이지 이용 안내</strong>
                            <br/>
                            본 홈페이지는 뮤지컬, 연극, 콘서트를
                            <br/>
                            예매할 수 있는 프로그램입니다.
                            <br/>
                            <Link href="https://github.com/heejaee/curtaincall-back"
                                  underline="hover">
                                프로젝트 정보 확인
                            </Link>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}