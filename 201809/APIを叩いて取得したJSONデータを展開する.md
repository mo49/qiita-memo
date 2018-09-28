https://teratail.com/questions/99765

Data Classes
https://unity3d.com/jp/learn/tutorials/topics/scripting/data-classes

APIが何を返しているのか知りたいとき

[Serializable]
public class UserInfo
{
    public string key;
    public string name;
}

====

string serializedJson = JsonUtility.ToJson(data);

