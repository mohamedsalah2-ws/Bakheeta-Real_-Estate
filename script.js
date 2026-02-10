document.addEventListener('DOMContentLoaded', function() {
    
    // تعريف العناصر
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav ul');
    const header = document.querySelector('header');

    // --- 1. فتح وإغلاق القائمة عند الضغط على الزر ---
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // تغيير شكل الأيقونة (بين القائمة و X)
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark'); // تأكد أن مكتبة الأيقونات تدعم xmark
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 2. إغلاق القائمة تلقائياً عند الضغط على أي رابط (مهم جداً) ---
    const navItems = document.querySelectorAll('nav ul li a');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // التحقق مما إذا كانت القائمة مفتوحة
            if (navLinks.classList.contains('active')) {
                // إغلاق القائمة
                navLinks.classList.remove('active');
                
                // إعادة الأيقونة لشكلها الطبيعي (القائمة)
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // --- 3. تغيير لون الهيدر عند التمرير (Sticky Header) ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.background = '#5d0000'; // خلفية سوداء عند التمرير
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
            header.style.padding = '10px 0';
        } else {
            header.classList.remove('scrolled');
            header.style.background = 'transparent'; // شفاف في الأعلى
            header.style.boxShadow = 'none';
            header.style.padding = '20px 0';
        }
    });

    // --- 4. تفاعل نموذج الخطوات (Add Property) - اختياري ---
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach(item => {
        item.addEventListener('click', function() {
            stepItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

});