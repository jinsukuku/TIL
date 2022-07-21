# RestAPI 
- 2022/07/21(목)
- [참고1] https://meetup.toast.com/posts/92
- [참고2] https://www.youtube.com/watch?v=PmY3dWcCxXI
- [참고3] https://www.youtube.com/watch?v=iOueE9AXDQQ

<br>

??? REST vs RestAPI

## [Reacp] RestAPI
- Representational State Transfer API
- 웹의 장점을 최대한 활용하기위한 아키텍처
- Rest의 구성
    1. `자원(resource)-URI`
    2. `행위(Verb)-HttpMethod`
    3. `표현(Respresentations)`
- REST의 특징 
    - Uniform(유니폼 인터페이스)
    - Staetless(무상태성)
    - Cacheable(캐시가능)
    - Self-descriptiveness(자체표현구조)
    - ClientServer구조
    - 계층형 구조
- RestAPI Design Guide
    1. URI는 정보의 자원을 표현해야한다
    2. 자원에 대한 행위는 HTTP Method(GET,POST,PUT,DElte)로 표현한다