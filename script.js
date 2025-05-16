// MBTI性格分析数据
const mbtiAnalysis = {
    "INTJ": "INTJ(建筑师)是富有想象力和战略性的思想家，拥有无懈可击的计划。你通常独立、果断，喜欢追求知识和能力。",
    "INTP": "INTP(逻辑学家)是具有创新思维的发明家，对知识有着无法满足的渴望。你通常分析性强、客观，喜欢理论和抽象思考。",
    "ENTJ": "ENTJ(指挥官)是大胆、富有想象力的领导者，总能找到或创造解决方案。你通常自信、果断，是天生的领导者。",
    "ENTP": "ENTP(辩论家)是聪明好奇的思想家，无法抗拒智力挑战。你通常机智、创新，喜欢辩论和头脑风暴。",
    "INFJ": "INFJ(倡导者)是安静而神秘的特质，同时鼓舞人心且不知疲倦的理想主义者。你通常富有同情心、有洞察力，致力于帮助他人。",
    "INFP": "INFP(调停者)是诗意、善良的利他主义者，总是热切地为正义事业而战。你通常理想主义、敏感，重视和谐。",
    "ENFJ": "ENFJ(主人公)是富有魅力和鼓舞人心的领导者，能够吸引听众。你通常热情、有说服力，善于社交。",
    "ENFP": "ENFP(竞选者)是热情、有创造力、社交能力强的自由精神，总能找到理由微笑。你通常乐观、充满活力，喜欢新体验。",
    "ISTJ": "ISTJ(物流师)是实际且注重事实的个人，其可靠性是毋庸置疑的。你通常负责、务实，重视传统和秩序。",
    "ISFJ": "ISFJ(守卫者)是非常专注、温暖和保护欲强的防御者，时刻准备保护所爱的人。你通常忠诚、体贴，注重细节。",
    "ESTJ": "ESTJ(总经理)是出色的管理者，对细节有着不可思议的关注。你通常有条理、诚实，喜欢结构和规则。",
    "ESFJ": "ESFJ(执政官)是极其关心他人的社交活动家，总是渴望帮助。你通常友善、尽责，重视和谐与合作。",
    "ISTP": "ISTP(鉴赏家)是大胆而实际的实验者，掌握各种工具的主人。你通常灵活、冷静，喜欢动手解决问题。",
    "ISFP": "ISFP(探险家)是灵活且有魅力的艺术家，随时准备探索和体验新事物。你通常温和、敏感，重视自由和自主。",
    "ESTP": "ESTP(企业家)是聪明、精力充沛、非常善于感知的人，真正享受生活的刺激。你通常外向、行动导向，喜欢冒险。",
    "ESFP": "ESFP(表演者)是自发的、精力充沛的娱乐者，让生活变得更加有趣。你通常热情、社交能力强，喜欢成为关注中心。"
};

// 星座性格分析数据
const zodiacAnalysis = {
    "白羊座": "白羊座的人充满活力、勇敢、热情。你喜欢挑战，行动力强，但有时会显得冲动。",
    "金牛座": "金牛座的人稳重、务实、有耐心。你重视安全和舒适，但有时会显得固执。",
    "双子座": "双子座的人聪明、好奇、适应力强。你喜欢交流和学习新事物，但有时会显得善变。",
    "巨蟹座": "巨蟹座的人情感丰富、有同情心、保护欲强。你重视家庭和情感联系，但有时会显得情绪化。",
    "狮子座": "狮子座的人自信、慷慨、有领导力。你喜欢成为关注中心，但有时会显得自负。",
    "处女座": "处女座的人细致、务实、追求完美。你注重细节和效率，但有时会显得挑剔。",
    "天秤座": "天秤座的人和谐、公正、社交能力强。你重视平衡和关系，但有时会显得犹豫不决。",
    "天蝎座": "天蝎座的人热情、坚定、有洞察力。你深沉而神秘，但有时会显得多疑。",
    "射手座": "射手座的人乐观、冒险、热爱自由。你喜欢探索和哲学思考，但有时会显得不负责任。",
    "摩羯座": "摩羯座的人自律、务实、有野心。你重视成就和稳定，但有时会显得过于严肃。",
    "水瓶座": "水瓶座的人创新、独立、人道主义。你思想前卫，但有时会显得疏离。",
    "双鱼座": "双鱼座的人富有同情心、直觉强、有创造力。你敏感而富有想象力，但有时会显得不切实际。"
};

// 组合分析数据
const combinedAnalysis = {
    "INTJ-白羊座": "你的INTJ理性思维与白羊座的行动力结合，使你成为战略与执行兼备的领导者。",
    "INTP-金牛座": "你的INTP分析能力与金牛座的稳定性结合，使你成为深思熟虑的实践者。",
    // 可以继续添加更多组合分析...
    "default": "你的MBTI类型和星座组合显示出独特的性格特征。"
};

// MBTI适配性数据
const mbtiCompatibility = {
    "INTJ": {
        "best": ["ENFP", "ENTP"],
        "good": ["INFJ", "INFP"],
        "challenging": ["ESFP", "ISFP"]
    },
    // 其他MBTI类型的适配性数据...
    "default": {
        "best": ["ENFP", "INFJ"],
        "good": ["INTP", "ENTP"],
        "challenging": ["ESTJ", "ISTJ"]
    }
};

// 星座适配性数据
const zodiacCompatibility = {
    "白羊座": {
        "best": ["狮子座", "射手座"],
        "good": ["双子座", "水瓶座"],
        "challenging": ["巨蟹座", "摩羯座"]
    },
    // 其他星座的适配性数据...
    "default": {
        "best": ["天秤座", "双子座"],
        "good": ["水瓶座", "射手座"],
        "challenging": ["天蝎座", "金牛座"]
    }
};

document.getElementById('analysisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mbti = document.getElementById('mbti').value;
    const zodiac = document.getElementById('zodiac').value;
    const showCompatibility = document.getElementById('showCompatibility').checked;
    
    if (!mbti || !zodiac) {
        alert('请选择MBTI类型和星座');
        return;
    }
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>你的性格分析结果</h2>
        <h3>MBTI分析 (${mbti})</h3>
        <p>${mbtiAnalysis[mbti]}</p>
        <h3>星座分析 (${zodiac})</h3>
        <p>${zodiacAnalysis[zodiac]}</p>
        <h3>综合性格分析</h3>
        <p>${combinedAnalysis[`${mbti}-${zodiac}`] || combinedAnalysis.default}</p>
    `;
    resultDiv.style.display = 'block';
    
    if (showCompatibility) {
        const compatibilityData = mbtiCompatibility[mbti] || mbtiCompatibility.default;
        const zodiacData = zodiacCompatibility[zodiac] || zodiacCompatibility.default;
        
        const compatibilityDiv = document.getElementById('compatibilityResult');
        compatibilityDiv.innerHTML = `
            <h2>适配性分析结果</h2>
            <h3>MBTI适配性</h3>
            <p><strong>最佳匹配:</strong> ${compatibilityData.best.join('、')}</p>
            <p><strong>良好匹配:</strong> ${compatibilityData.good.join('、')}</p>
            <p><strong>挑战性匹配:</strong> ${compatibilityData.challenging.join('、')}</p>
            
            <h3>星座适配性</h3>
            <p><strong>最佳匹配:</strong> ${zodiacData.best.join('、')}</p>
            <p><strong>良好匹配:</strong> ${zodiacData.good.join('、')}</p>
            <p><strong>挑战性匹配:</strong> ${zodiacData.challenging.join('、')}</p>
        `;
        compatibilityDiv.style.display = 'block';
    } else {
        document.getElementById('compatibilityResult').style.display = 'none';
    }
});
