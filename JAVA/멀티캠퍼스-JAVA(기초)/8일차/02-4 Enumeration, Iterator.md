# 2-4. Enumeration, Iterator

## ✏️  `Enumeration` 과 `Iterator`

- Collection API에서 값을 꺼낼 때 사용하는 클래스이다
- `Itorator` 는 Collection API에서의 값을 꺼내는 표준화하기 위한 방법이다
- Collection API를 다루는 방법은 해당 Collection API 내부에 존재한다
- `Iterator` 와 `for문` 의 차이점
    - key값을 `keySet()` 으로 불러오면 return type이 `set` 이다
    - `set` 은 순서가 없으므로 일반적인 index를 사용하는 for문에 사용할 수 없다
    - 그렇기 때문에 `Map` 에는 `Iterator()` Casting하여 일회용으로 for문을 돌릴 수 있도록 했다
        - `Itorator` 는 한번 사용한 후에는 다시 사용할 수 없다
    - `for-in문` 으로는 index없이도 for문을 사용할 수 있어서 큰 문제가 되지 않게 되었다

## ✏️  `Enumeration`

```java
package com.edu.collection.test;

import java.util.Enumeration;
import java.util.Properties;

public class PropertiesTest1 {

	public static void main(String[] args) {	
		Properties p = System.getProperties();
		
		Enumeration e = p.propertyNames();
		while(e.hasMoreElements()) {
			String name = (String)e.nextElement();
			String value = p.getProperty(name);
			System.out.println(name + " : " + value);
		}
	}
}
```

- Collection 을 다루는 방법은 Collection안에 존재한다
    1. key를 먼저 뽑아 본다
    2. 반복문 안에서 key에 해당하는 value를 하나씩 뽑는다
    3. hasMoreElements() 를 확인한다 
        1. YES : nextElements()
        2. NO : (String) key → Object형태로 뽑히기때문에 Casting이 필요하다