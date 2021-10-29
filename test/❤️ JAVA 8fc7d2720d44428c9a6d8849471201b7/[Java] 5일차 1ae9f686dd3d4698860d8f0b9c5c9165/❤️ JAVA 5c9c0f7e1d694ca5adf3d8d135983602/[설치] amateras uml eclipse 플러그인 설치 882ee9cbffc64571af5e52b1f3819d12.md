# [설치] amateras uml eclipse 플러그인 설치

최종 편집 일시: 2021년 10월 29일 오전 2:33
키워드: ClassDiagram, Plugin, UML

## ✏️  클래스 다이어그램을 위해 amateras uml eclipse 설치

- 구글에 `amateras uml eclipse` 라고 검색
- [https://takezoe.github.io/amateras-update-site](https://takezoe.github.io/amateras-update-site) 복사

![스크린샷 2021-10-25 오후 3.34.01.png](%5B%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%5D%20amateras%20uml%20eclipse%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20882ee9cbffc64571af5e52b1f3819d12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.34.01.png)

- 이클립스 Help 메뉴 → Install New Software → Add → Location에 복사한 url 붙여넣기 → Name도 설정 → Add
- 설치 url 이 있는 경우, Install New Software를 사용해 플러그인을 설치할 수 있다
- Mac OS에서는 설치 오류가 나길래 직접 설치해야했다
    - [https://mobilenweb.tistory.com/112](https://mobilenweb.tistory.com/112)
    - 위 링크를 참고해서 직접 jar파일을 다운로드 받고
    - 이클립스 우클릭 → 패키지 열기 → Eclips → plugins 폴더로 옮기고 이클립스를 재실행하면 설치가 완료된다

## ✏️  사용하기

1. 자바 프로젝트 우클릭 → other → AmaterasUML → Class Diagram 선택 → Next
2. 확장자가 cld(Class Diagram)인 파일명을 수정한다 (예제에서는 ProductServiceUML1.cld) → finish
    
    ![스크린샷 2021-10-25 오후 3.47.51.png](%5B%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%5D%20amateras%20uml%20eclipse%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20882ee9cbffc64571af5e52b1f3819d12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.47.51.png)
    
3. java파일을 선택하고 끌어와서 열려있는 cld파일에 drag and drop 한다
4. UML형식으로 java파일이 보여진다
5. hasing관계를 표시할 때에는 Aggregation이나 Dependency를 사용한다
6. 붉은색 네모로 표시된 건 private를 의미하고, 초록색 원은 public을 의미한다

Class간의 유기적인 관련성을 직관적으로 보기위해서는 UML보다 **Class Diagram**을 사용하자

![스크린샷 2021-10-25 오후 3.59.01.png](%5B%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%5D%20amateras%20uml%20eclipse%20%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8E%E1%85%B5%20882ee9cbffc64571af5e52b1f3819d12/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-10-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.59.01.png)