# Mosquitto 로그

```bash
    - ./mosquitto/config/:/mosquitto/config/:rw
    - ./mosquitto/data:/mosquitto/data
    - ./mosquitto/log:/mosquitto/log
```

> mosquitto 에서 Config, Data, Log 3가지 폴더를 생성하게 된다.
> 그 중에 Config는 운영체제에 설치되어야한다고 오류 로그가 나타나서
> 삭제 해놨다
