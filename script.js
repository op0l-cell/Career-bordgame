let career = "";
let currentQuestion = 0;
let questions = [];

let stats = {
    analysis: 0,
    problem: 0,
    communication: 0,
    helping: 0,
    creativity: 0,
    pressure: 0,
    time: 0
};


// ========================================
// คำถามทั้งหมด
// ========================================

const allQuestions = {

    "หมอ": [

        {
            text: "🏥 มีคนไข้จำนวนมาก แต่คุณกำลังทำงานอื่นอยู่",
            choices: [
                {
                    answer: "ปล่อยให้รอไปก่อน เพราะคุณยังมีงานที่ต้องทำ",
                    stats: {
                        analysis: 0,
                        problem: 0,
                        communication: -20,
                        helping: -50,
                        creativity: 0,
                        pressure: -20,
                        time: 20
                    }
                },
                {
                    answer: "รีบจัดลำดับความเร่งด่วนของคนไข้ก่อน",
                    stats: {
                        analysis: 30,
                        problem: 30,
                        communication: 10,
                        helping: 20,
                        creativity: 0,
                        pressure: 20,
                        time: 30
                    }
                },
                {
                    answer: "ขอให้เพื่อนร่วมงานช่วยดูคนไข้บางส่วน",
                    stats: {
                        analysis: 10,
                        problem: 20,
                        communication: 30,
                        helping: 20,
                        creativity: 0,
                        pressure: 30,
                        time: 30
                    }
                }
            ]
        },

        {
            text: "🌙 คุณเข้าเวรกลางคืนและกำลังจะได้พัก แต่มีคนไข้เข้ามาใหม่",
            choices: [
                {
                    answer: "รับคนไข้ทันที แม้ว่าจะเหนื่อยมาก",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 10,
                        helping: 40,
                        creativity: 0,
                        pressure: 40,
                        time: -20
                    }
                },
                {
                    answer: "ตรวจว่าคนไข้เร่งด่วนแค่ไหนก่อนตัดสินใจ",
                    stats: {
                        analysis: 30,
                        problem: 30,
                        communication: 10,
                        helping: 30,
                        creativity: 0,
                        pressure: 20,
                        time: 20
                    }
                },
                {
                    answer: "ขอให้คนอื่นรับช่วงต่อ เพราะคุณต้องพัก",
                    stats: {
                        analysis: 0,
                        problem: 10,
                        communication: 20,
                        helping: 0,
                        creativity: 0,
                        pressure: -20,
                        time: 40
                    }
                }
            ]
        },

        {
            text: "🧑‍👩‍👦 ญาติคนไข้กำลังกังวลและถามคำถามเดิมซ้ำหลายครั้ง",
            choices: [
                {
                    answer: "อธิบายให้ฟังอีกครั้งอย่างใจเย็น",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 40,
                        helping: 40,
                        creativity: 0,
                        pressure: 30,
                        time: -20
                    }
                },
                {
                    answer: "บอกข้อมูลสั้น ๆ แล้วกลับไปทำงานต่อ",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: -20,
                        helping: -20,
                        creativity: 0,
                        pressure: 10,
                        time: 30
                    }
                },
                {
                    answer: "ใช้วิธีอธิบายด้วยภาพหรือเปรียบเทียบให้เข้าใจง่ายขึ้น",
                    stats: {
                        analysis: 20,
                        problem: 20,
                        communication: 40,
                        helping: 30,
                        creativity: 30,
                        pressure: 20,
                        time: -10
                    }
                }
            ]
        },

        {
            text: "⚠️ คุณพบว่าตัวเองอาจทำขั้นตอนหนึ่งผิดพลาด",
            choices: [
                {
                    answer: "รีบตรวจสอบว่าความผิดพลาดส่งผลอะไรไปแล้วบ้าง",
                    stats: {
                        analysis: 40,
                        problem: 40,
                        communication: 20,
                        helping: 30,
                        creativity: 0,
                        pressure: 30,
                        time: -10
                    }
                },
                {
                    answer: "พยายามแก้ไขเองก่อน ไม่อยากให้คนอื่นรู้",
                    stats: {
                        analysis: 10,
                        problem: 20,
                        communication: -30,
                        helping: -20,
                        creativity: 0,
                        pressure: 10,
                        time: 10
                    }
                },
                {
                    answer: "แจ้งทีมทันทีและช่วยกันหาทางแก้",
                    stats: {
                        analysis: 20,
                        problem: 30,
                        communication: 40,
                        helping: 40,
                        creativity: 0,
                        pressure: 40,
                        time: -10
                    }
                }
            ]
        },

        {
            text: "📚 คุณต้องเรียนรู้วิธีรักษาหรือข้อมูลใหม่จำนวนมากภายในเวลาจำกัด",
            choices: [
                {
                    answer: "อ่านทุกอย่างให้ละเอียดก่อนลงมือ",
                    stats: {
                        analysis: 40,
                        problem: 20,
                        communication: 0,
                        helping: 10,
                        creativity: 0,
                        pressure: 20,
                        time: -30
                    }
                },
                {
                    answer: "เลือกอ่านเฉพาะข้อมูลสำคัญที่จำเป็นต่อการทำงาน",
                    stats: {
                        analysis: 30,
                        problem: 30,
                        communication: 0,
                        helping: 10,
                        creativity: 0,
                        pressure: 20,
                        time: 30
                    }
                },
                {
                    answer: "ขอคำแนะนำจากคนที่มีประสบการณ์มากกว่า",
                    stats: {
                        analysis: 20,
                        problem: 20,
                        communication: 30,
                        helping: 10,
                        creativity: 0,
                        pressure: 30,
                        time: 20
                    }
                }
            ]
        },

        {
            text: "😣 คนไข้ไม่พอใจและพูดตำหนิคุณอย่างรุนแรง",
            choices: [
                {
                    answer: "อธิบายเหตุผลของคุณและพยายามทำให้เขาเข้าใจ",
                    stats: {
                        analysis: 20,
                        problem: 20,
                        communication: 40,
                        helping: 20,
                        creativity: 0,
                        pressure: 30,
                        time: -10
                    }
                },
                {
                    answer: "ไม่โต้เถียง ปล่อยให้เขาพูดจนสงบก่อน",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 30,
                        helping: 20,
                        creativity: 0,
                        pressure: 40,
                        time: 10
                    }
                },
                {
                    answer: "ถอยออกมาก่อน เพราะไม่อยากรับความกดดัน",
                    stats: {
                        analysis: 0,
                        problem: 0,
                        communication: -10,
                        helping: 0,
                        creativity: 0,
                        pressure: -30,
                        time: 20
                    }
                }
            ]
        },

        {
            text: "🕐 วันนี้งานเสร็จช้ากว่าที่คิดมาก คุณมีนัดสำคัญหลังเลิกงาน",
            choices: [
                {
                    answer: "ทำงานให้เสร็จก่อน แม้จะต้องยกเลิกนัด",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 0,
                        helping: 20,
                        creativity: 0,
                        pressure: 30,
                        time: -40
                    }
                },
                {
                    answer: "ประเมินว่างานไหนจำเป็นต้องทำวันนี้ แล้วจัดการเฉพาะสิ่งสำคัญ",
                    stats: {
                        analysis: 30,
                        problem: 30,
                        communication: 10,
                        helping: 20,
                        creativity: 0,
                        pressure: 20,
                        time: 40
                    }
                },
                {
                    answer: "ขอให้เพื่อนร่วมงานช่วยรับช่วงงานที่เหลือ",
                    stats: {
                        analysis: 10,
                        problem: 20,
                        communication: 30,
                        helping: 10,
                        creativity: 0,
                        pressure: 30,
                        time: 30
                    }
                }
            ]
        },

        {
            text: "🩻 คุณกับแพทย์อีกคนมีความคิดเห็นเกี่ยวกับแนวทางรักษาต่างกัน",
            choices: [
                {
                    answer: "ยืนยันความคิดของตัวเอง เพราะคุณคิดว่ามันดีที่สุด",
                    stats: {
                        analysis: 20,
                        problem: 20,
                        communication: -20,
                        helping: 10,
                        creativity: 10,
                        pressure: 20,
                        time: 20
                    }
                },
                {
                    answer: "แลกเปลี่ยนเหตุผลและหาข้อมูลมาประกอบการตัดสินใจ",
                    stats: {
                        analysis: 40,
                        problem: 40,
                        communication: 30,
                        helping: 20,
                        creativity: 10,
                        pressure: 30,
                        time: -10
                    }
                },
                {
                    answer: "ยอมตามอีกฝ่ายเพื่อไม่ให้เกิดความขัดแย้ง",
                    stats: {
                        analysis: 0,
                        problem: 10,
                        communication: 20,
                        helping: 10,
                        creativity: 0,
                        pressure: 10,
                        time: 30
                    }
                }
            ]
        },

        {
            text: "❤️ คนไข้ที่คุณดูแลมีอาการดีขึ้นและขอบคุณคุณ",
            choices: [
                {
                    answer: "รู้สึกดีใจที่สิ่งที่ทำช่วยให้เขาดีขึ้น",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 20,
                        helping: 50,
                        creativity: 0,
                        pressure: 20,
                        time: 0
                    }
                },
                {
                    answer: "รู้สึกดี แต่คิดว่านี่เป็นเพียงหน้าที่ของคุณ",
                    stats: {
                        analysis: 10,
                        problem: 10,
                        communication: 10,
                        helping: 10,
                        creativity: 0,
                        pressure: 20,
                        time: 10
                    }
                },
                {
                    answer: "นำประสบการณ์นี้ไปคิดต่อว่ามีวิธีดูแลคนไข้ให้ดีขึ้นอีกไหม",
                    stats: {
                        analysis: 30,
                        problem: 30,
                        communication: 20,
                        helping: 40,
                        creativity: 20,
                        pressure: 20,
                        time: -10
                    }
                }
            ]
        },

  {
            text: "🧠 หลังเลิกงาน คุณพบว่าตัวเองยังคิดถึงปัญหาของคนไข้คนหนึ่งอยู่",
            choices: [
                {
                    answer: "กลับไปทบทวนข้อมูลและหาสาเหตุเพิ่มเติม",
                    stats: {
                        analysis: 40,
                        problem: 40,
                        communication: 0,
                        helping: 30,
                        creativity: 10,
                        pressure: 20,
                        time: -30
                    }
                },
                {
                    answer: "พยายามหยุดคิดเรื่องงานและใช้เวลากับตัวเอง",
                    stats: {
                        analysis: 0,
                        problem: 0,
                        communication: 0,
        helping: 0,
        creativity: 0,
        pressure: 0,
        time: 0
            }
     },

        {
            answer: "จดสิ่งที่ต้องทำต่อไว้ แล้วค่อยกลับมาจัดการในเวลางาน",
            stats: {
                analysis: 20,
                problem: 20,
                communication: 10,
                helping: 10,
                creativity: 0,
                pressure: 30,
                time: 40
            }
        }
    ]
  }
    ],
    "นักออกแบบ": [
    {
        text: "⏰ 08:30 น. — คุณได้รับโจทย์งานจากลูกค้า แต่รายละเอียดค่อนข้างคลุมเครือ",
        choices: [
            {
                answer: "เริ่มออกแบบจากสิ่งที่เข้าใจก่อน แล้วค่อยปรับทีหลัง",
                stats: {
                    analysis: 10,
                    problem: 10,
                    communication: -10,
                    helping: 0,
                    creativity: 30,
                    pressure: 10,
                    time: 20
                }
            },
            {
                answer: "ถามลูกค้าเพิ่มเติมว่าต้องการอะไร ก่อนเริ่มออกแบบ",
                stats: {
                    analysis: 30,
                    problem: 20,
                    communication: 40,
                    helping: 30,
                    creativity: 10,
                    pressure: 20,
                    time: -10
                }
            },
            {
                answer: "ลองตีความโจทย์หลายแบบ แล้วเลือกแนวทางที่คิดว่าน่าสนใจที่สุด",
                stats: {
                    analysis: 30,
                    problem: 30,
                    communication: 10,
                    helping: 10,
                    creativity: 40,
                    pressure: 20,
                    time: -10
                }
            }
        ]
    },

    {
        text: "☕ 09:15 น. — คุณต้องออกแบบงานให้เสร็จภายในวันนี้ แต่ยังไม่มีไอเดียที่ถูกใจ",
        choices: [
            {
                answer: "นั่งคิดต่อจนกว่าจะได้ไอเดียที่ดีที่สุด",
                stats: {
                    analysis: 20,
                    problem: 20,
                    communication: 0,
                    helping: 10,
                    creativity: 40,
                    pressure: 30,
                    time: -30
                }
            },
            {
                answer: "ลองร่างไอเดียหลายแบบอย่างรวดเร็ว แล้วเลือกแบบที่ดีที่สุด",
                stats: {
                    analysis: 20,
                    problem: 30,
                    communication: 0,
                    helping: 0,
                    creativity: 40,
                    pressure: 20,
                    time: 30
                }
            },
            {
                answer: "ขอความคิดเห็นจากเพื่อนร่วมงานเพื่อช่วยหาแนวทาง",
                stats: {
                    analysis: 10,
                    problem: 20,
                    communication: 40,
                    helping: 20,
                    creativity: 20,
                    pressure: 20,
                    time: 10
                }
            }
        ]
    },

    {
        text: "🎨 10:30 น. — คุณออกแบบงานไปได้ครึ่งหนึ่ง แต่พบว่าขนาดของงานไม่ตรงกับพื้นที่ที่จะนำไปใช้",
        choices: [
            {
                answer: "ปรับงานใหม่ให้เข้ากับขนาดที่ถูกต้อง",
                stats: {
                    analysis: 30,
                    problem: 40,
                    communication: 10,
                    helping: 10,
                    creativity: 20,
                    pressure: 30,
                    time: -10
                }
            },
            {
                answer: "ใช้ขนาดเดิม เพราะไม่อยากเสียเวลาเริ่มใหม่",
                stats: {
                    analysis: -10,
                    problem: -20,
                    communication: 0,
                    helping: -10,
                    creativity: 10,
                    pressure: -10,
                    time: 30
                }
            },
            {
                answer: "หาวิธีดัดแปลงงานเดิมให้เข้ากับพื้นที่โดยไม่ต้องเริ่มใหม่ทั้งหมด",
                stats: {
                    analysis: 30,
                    problem: 40,
                    communication: 10,
                    helping: 0,
                    creativity: 30,
                    pressure: 30,
                    time: 30
                }
            }
        ]
    },

    {
        text: "👥 11:30 น. — ลูกค้าบอกว่า “ยังไม่ชอบ” แต่ไม่สามารถอธิบายได้ว่าต้องการแก้ตรงไหน",
        choices: [
            {
                answer: "ถามคำถามเพิ่มเติมเพื่อค้นหาว่าลูกค้าไม่ชอบอะไร",
                stats: {
                    analysis: 30,
                    problem: 20,
                    communication: 40,
                    helping: 30,
                    creativity: 10,
                    pressure: 30,
                    time: -10
                }
            },
            {
                answer: "เดาใจลูกค้าแล้วลองปรับงานตามความรู้สึกของตัวเอง",
                stats: {
                    analysis: 10,
                    problem: 10,
                    communication: -10,
                    helping: 10,
                    creativity: 30,
                    pressure: 20,
                    time: 20
                }
            },
            {
                answer: "ให้ลูกค้าเลือกจากตัวอย่างหลายรูปแบบเพื่อหาทิศทางที่ต้องการ",
                stats: {
                    analysis: 30,
                    problem: 30,
                    communication: 30,
                    helping: 20,
                    creativity: 30,
                    pressure: 20,
                    time: 10
                }
            }
        ]
    },

    {
        text: "🍱 13:00 น. — ถึงเวลาพักกลางวัน แต่ลูกค้าขอให้แก้งานด่วนเพราะต้องใช้ตอนบ่าย",
        choices: [
            {
                answer: "ทำงานต่อทันทีเพื่อให้งานเสร็จตามที่ลูกค้าต้องการ",
                stats: {
                    analysis: 10,
                    problem: 10,
                    communication: 10,
                    helping: 30,
                    creativity: 10,
                    pressure: 40,
                    time: -20
                }
            },
            {
                answer: "ขอพักก่อน แล้วกลับมาแก้ทันทีหลังพัก",
                stats: {
                    analysis: 0,
                    problem: 10,
                    communication: 30,
                    helping: 10,
                    creativity: 0,
                    pressure: 30,
                    time: 30
                }
            },
            {
                answer: "ประเมินว่าส่วนไหนจำเป็นที่สุด แล้วแก้เฉพาะส่วนนั้นก่อน",
                stats: {
                    analysis: 30,
                    problem: 40,
                    communication: 20,
                    helping: 20,
                    creativity: 10,
                    pressure: 30,
                    time: 40
                }
            }
        ]
    },

    {
        text: "💻 14:00 น. — คุณนำเสนอผลงาน แต่ลูกค้าบอกว่า “แบบก่อนหน้านี้ดูดีกว่า”",
        choices: [
            {
                answer: "อธิบายเหตุผลว่าทำไมคุณจึงเลือกออกแบบแบบนี้",
                stats: {
                    analysis: 30,
                    problem: 20,
                    communication: 40,
                    helping: 10,
                    creativity: 20,
                    pressure: 30,
                    time: 10
                }
            },
            {
                answer: "ยอมกลับไปใช้แบบเดิมทันที",
                stats: {
                    analysis: 0,
                    problem: 10,
                    communication: 20,
                    helping: 20,
                    creativity: -10,
                    pressure: 10,
                    time: 20
                }
            },
            {
                answer: "ถามว่าลูกค้าชอบอะไรในแบบเดิม แล้วนำจุดนั้นมาผสมกับแนวคิดใหม่",
                stats: {
                    analysis: 30,
                    problem: 30,
                    communication: 40,
                    helping: 30,
                    creativity: 40,
                    pressure: 30,
                    time: -10
                }
            }
        ]
    },

    {
        text: "🔄 15:30 น. — ลูกค้าเปลี่ยนโจทย์ใหม่เกือบทั้งหมด ทั้งที่งานใกล้เสร็จแล้ว",
        choices: [
            {
                answer: "เริ่มทำใหม่ทันที แม้จะต้องใช้เวลามาก",
                stats: {
                    analysis: 10,
                    problem: 20,
                    communication: 10,
                    helping: 20,
                    creativity: 30,
                    pressure: 40,
                    time: -30
                }
            },
            {
                answer: "คุยกับลูกค้าเพื่อหาวิธีปรับงานเดิมให้ใช้กับโจทย์ใหม่ได้",
                stats: {
                    analysis: 40,
                    problem: 40,
                    communication: 40,
                    helping: 20,
                    creativity: 30,
                    pressure: 30,
                    time: 30
                }
            },
            {
                answer: "บอกลูกค้าว่าการเปลี่ยนทั้งหมดตอนนี้อาจทำให้งานไม่ทัน",
                stats: {
                    analysis: 20,
                    problem: 20,
                    communication: 30,
                    helping: 10,
                    creativity: 0,
                    pressure: 30,
                    time: 40
                }
            }
        ]
    },

    {
        text: "📐 16:30 น. — เหลือเวลาอีก 1 ชั่วโมง แต่ผลงานยังไม่สมบูรณ์",
        choices: [
            {
                answer: "รีบทำทุกอย่างให้เสร็จ แม้บางส่วนอาจยังไม่ละเอียด",
                stats: {
                    analysis: 10,
                    problem: 20,
                    communication: 0,
                    helping: 10,
                    creativity: 10,
                    pressure: 30,
                    time: 40
                }
            },
            {
                answer: "เลือกแก้เฉพาะจุดสำคัญที่สุดก่อน",
                stats: {
                    analysis: 30,
                    problem: 40,
                    communication: 0,
                    helping: 20,
                    creativity: 20,
                    pressure: 30,
                    time: 40
                }
            },
            {
                answer: "ทำต่อจนกว่าจะสมบูรณ์ที่สุด แม้อาจส่งงานช้า",
                stats: {
                    analysis: 20,
                    problem: 20,
                    communication: 0,
                    helping: 10,
                    creativity: 40,
                    pressure: 40,
                    time: -40
                }
            }
        ]
    },

    {
        text: "📩 17:30 น. — คุณส่งงานแล้ว แต่ลูกค้าส่งข้อความมาขอแก้อีก 3 จุด",
        choices: [
            {
                answer: "แก้ให้ทันทีเพื่อให้งานจบในวันนี้",
                stats: {
                    analysis: 10,
                    problem: 20,
                    communication: 20,
                    helping: 30,
                    creativity: 10,
                    pressure: 40,
                    time: -30
                }
            },
            {
                answer: "แจ้งลูกค้าว่าจะดำเนินการให้ในวันถัดไป",
                stats: {
                    analysis: 10,
                    problem: 10,
                    communication: 30,
                    helping: 10,
                    creativity: 0,
                    pressure: 30,
                    time: 40
                }
            },
            {
                answer: "ตรวจสอบก่อนว่าการแก้ทั้ง 3 จุดจำเป็นแค่ไหน แล้วคุยกับลูกค้าเรื่องกำหนดส่ง",
                stats: {
                    analysis: 30,
                    problem: 30,
                    communication: 40,
                    helping: 20,
                    creativity: 10,
                    pressure: 30,
                    time: 30
                }
            }
        ]
    },

    {
        text: "🌇 18:30 น. — หมดเวลางานแล้ว คุณมองผลงานที่ทำมาตลอดทั้งวัน",
        choices: [
            {
                answer: "รู้สึกภูมิใจที่ได้สร้างบางอย่างจากความคิดของตัวเอง",
                stats: {
                    analysis: 10,
                    problem: 10,
                    communication: 10,
                    helping: 30,
                    creativity: 50,
                    pressure: 20,
                    time: 20
                }
            },
            {
                answer: "คิดถึงสิ่งที่ยังทำได้ไม่ดี และอยากกลับไปปรับปรุง",
                stats: {
                    analysis: 40,
                    problem: 30,
                    communication: 0,
                    helping: 20,
                    creativity: 30,
                    pressure: 30,
                    time: -20
                }
            },
            {
                answer: "รู้สึกเหนื่อย แต่มีความสุขที่ได้แก้ปัญหาและทำงานจนสำเร็จ",
                stats: {
                    analysis: 20,
                    problem: 30,
                    communication: 10,
                    helping: 30,
                    creativity: 30,
                    pressure: 40,
                    time: 20
                }
            }
        ]
    }
 ]
};

function selectCareer(name) {

    career = name;
    questions = allQuestions[career];

    currentQuestion = 0;

    document.getElementById("careerPage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";

    document.getElementById("careerTitle").innerHTML =
        "คุณกำลังใช้ชีวิตเป็น " +
        career +
        " 1 วัน";
}

// ========================================
// เริ่มเกม
// ========================================

function startGame() {

    document.getElementById("gamePage").style.display = "none";
    document.getElementById("questionPage").style.display = "block";

    showQuestion();
}


// ========================================
// แสดงคำถาม
// ========================================

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.text;

    document.getElementById("choice1").innerHTML =
        "A. " + q.choices[0].answer;

    document.getElementById("choice2").innerHTML =
        "B. " + q.choices[1].answer;

    document.getElementById("choice3").innerHTML =
        "C. " + q.choices[2].answer;


    document.getElementById("choice1").onclick = function() {
        answerQuestion(q.choices[0].stats);
    };

    document.getElementById("choice2").onclick = function() {
        answerQuestion(q.choices[1].stats);
    };

    document.getElementById("choice3").onclick = function() {
        answerQuestion(q.choices[2].stats);
    };
}


// ========================================
// เพิ่มคะแนน
// ========================================

function answerQuestion(points) {

    stats.analysis += points.analysis;
    stats.problem += points.problem;
    stats.communication += points.communication;
    stats.helping += points.helping;
    stats.creativity += points.creativity;
    stats.pressure += points.pressure;
    stats.time += points.time;

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showEnding();
    }
}


// ========================================
// คุณสมบัติของอาชีพ
// ========================================

const careerTraits = {

    "หมอ": {
        analysis: 4,
        pressure: 4,
        problem: 3,
        helping: 2
    },

    "พยาบาล": {
        helping: 4,
        communication: 4,
        pressure: 3,
        time: 3
    },

    "ครู": {
        communication: 4,
        helping: 4,
        pressure: 3,
        analysis: 2
    },

    "โปรแกรมเมอร์": {
        problem: 4,
        analysis: 4,
        time: 3,
        pressure: 3
    },

    "นักออกแบบ": {
        creativity: 4,
        problem: 3,
        communication: 2,
        time: 2
    }
};
const careerDescriptions = {

    "หมอ": {
        title: "🩺 หมอ",
        quote: "คุณคือคนที่ไม่ยอมแพ้ต่อปัญหา และพร้อมรับผิดชอบต่อชีวิตของผู้อื่น",
        description: "คุณเป็นคนคิดอย่างมีเหตุผล รอบคอบ และรับมือกับความกดดันได้ดี เมื่อเกิดปัญหา คุณมักไม่ถอยหนี แต่พยายามหาทางแก้ไขจนสำเร็จ คุณให้ความสำคัญกับการช่วยเหลือผู้อื่น และพร้อมรับผิดชอบต่อการตัดสินใจของตัวเอง",
        suitable: "🩺 หมอ | 💻 โปรแกรมเมอร์ | ⚖️ นักกฎหมาย"
    },

    "พยาบาล": {
        title: "👩‍⚕️ พยาบาล",
        quote: "คุณอาจไม่ได้อยากเป็นฮีโร่ แต่คุณอยากเป็นคนที่อยู่ตรงนั้นเมื่อใครสักคนต้องการ",
        description: "คุณเป็นคนใส่ใจผู้อื่น อดทน และมีความเข้าอกเข้าใจ คุณสามารถทำงานภายใต้ความกดดันและรับมือกับผู้คนหลากหลายรูปแบบได้ดี ความสุขของคุณส่วนหนึ่งมาจากการได้เห็นคนอื่นดีขึ้นเพราะสิ่งที่คุณทำ",
        suitable: "👩‍⚕️ พยาบาล | 👨‍🏫 ครู | 🩺 หมอ"
    },

    "ครู": {
        title: "👨‍🏫 ครู",
        quote: "คุณไม่ได้เพียงต้องการรู้คำตอบ แต่คุณอยากช่วยให้คนอื่นค้นพบคำตอบด้วยตัวเอง",
        description: "คุณเป็นคนสื่อสารเก่ง เข้าใจผู้อื่น และมีความอดทน คุณสนใจพัฒนาคนมากกว่าการทำงานให้เสร็จเพียงอย่างเดียว คุณมีความสุขเมื่อเห็นคนอื่นเติบโต และสามารถปรับวิธีการของตัวเองให้เข้ากับคนแต่ละคนได้",
        suitable: "👨‍🏫 ครู | 👩‍⚕️ พยาบาล | 🎨 นักออกแบบ"
    },

    "โปรแกรมเมอร์": {
        title: "💻 โปรแกรมเมอร์",
        quote: "คุณไม่ได้กลัวปัญหา เพราะสำหรับคุณ ปัญหาคือปริศนาที่รอให้แก้",
        description: "คุณเป็นคนชอบคิด วิเคราะห์ และค้นหาวิธีแก้ปัญหา คุณสามารถจดจ่อกับสิ่งที่สนใจและไม่จำเป็นต้องทำงานร่วมกับคนอื่นตลอดเวลา คุณมักสนุกกับการค้นหาว่า “ทำไมมันถึงเป็นแบบนี้?” และ “มีวิธีที่ดีกว่านี้ไหม?”",
        suitable: "💻 โปรแกรมเมอร์ | 🩺 หมอ | 🎨 นักออกแบบ"
    },

    "นักออกแบบ": {
        title: "🎨 นักออกแบบ",
        quote: "คุณไม่ได้มองโลกเพียงในสิ่งที่มันเป็น แต่คุณมองเห็นสิ่งที่มันสามารถเป็นได้",
        description: "คุณเป็นคนรักอิสระ มีจินตนาการ และชอบสร้างสิ่งใหม่ ๆ คุณไม่จำเป็นต้องเดินตามวิธีเดิมเสมอไป และมักมองเห็นทางเลือกที่คนอื่นอาจมองข้าม คุณสนุกกับการทดลองและเปลี่ยนความคิดให้กลายเป็นสิ่งที่จับต้องได้",
        suitable: "🎨 นักออกแบบ | 💻 โปรแกรมเมอร์ | 👨‍🏫 ครู"
    }

};

// ========================================
// แสดงผลตอนจบ
// ========================================

function showEnding() {

    document.getElementById("questionPage").style.display = "none";
    document.getElementById("endingPage").style.display = "block";


    // ========================================
    // แสดงคะแนน 7 ด้าน
    // ========================================

    document.getElementById("analysisScore").innerHTML =
        stats.analysis;

    document.getElementById("problemScore").innerHTML =
        stats.problem;

    document.getElementById("communicationScore").innerHTML =
        stats.communication;

    document.getElementById("helpScore").innerHTML =
        stats.helping;

    document.getElementById("creativeScore").innerHTML =
        stats.creativity;

    document.getElementById("pressureScore").innerHTML =
        stats.pressure;

    document.getElementById("timeScore").innerHTML =
        stats.time;


    // ========================================
    // คำนวณความใกล้เคียงของแต่ละอาชีพ
    // ========================================

    let results = [];

    for (let job in careerTraits) {

        let total = 0;

        let traits = careerTraits[job];

        for (let trait in traits) {

            total += (stats[trait] || 0) * traits[trait];

        }

        results.push({
            career: job,
            score: total
        });
    }


    // เรียงจากคะแนนมาก → น้อย

    results.sort(function(a, b) {

        return b.score - a.score;

    });


    // ========================================
    // อาชีพอันดับ 1
    // ========================================

    let firstCareer = results[0].career;

    let description = careerDescriptions[firstCareer];


    let resultText = `

        <h2>${description.title}</h2>

        <p>
            <strong>“${description.quote}”</strong>
        </p>

        <p>
            ${description.description}
        </p>

        <h3>อาชีพที่เหมาะกับคุณ:</h3>

        <p>
            ${description.suitable}
        </p>

        <hr>

        <h3>อันดับอาชีพที่มีลักษณะใกล้เคียงกับคุณ</h3>

        🥇 ${results[0].career}<br>
        🥈 ${results[1].career}<br>
        🥉 ${results[2].career}

    `;


    document.getElementById("endingText").innerHTML =
        resultText;
            }
