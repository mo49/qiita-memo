[お手軽にはじめるバーチャルYouTuber(VTuber)になる方法](https://medium.com/@GOROman_1661/%E4%B8%AD%E3%81%AE%E4%BA%BA-%E4%BA%8C%E6%AC%A1%E5%85%83-%E3%81%AB%E3%81%AA%E3%82%8B%E6%96%B9%E6%B3%95-facerig-live2d-unity-obs-avvoicechanger-%E6%B0%97%E5%90%88-d49c3d456ed6)

FaceRigはwindowsのみ？

https://qiita.com/utibenkei/items/15925db826721f6bb00c
OpenCV for Unity

顔器官検出
Dlib FaceLandmark Detector

https://store.steampowered.com/app/420680/FaceRig_Live2D_Module/?l=japanese

## Live2d Cubism SDK for Unity 

ググっているとCubism2の記事に当たることも多いが、
特別な理由がなければCubism3を使う。

SDKチュートリアル
http://docs.live2d.com/cubism-sdk-tutorials/top/

GitHub
https://live2d.github.io/

組み込み用ファイルに書き出すと、FaceRigに使用することができる


## エラー

```
Live2D CubismCore is not loaded

Please reboot this Unity project if it is just after import of the SDK. If it's not, please check if platform settings of dll is correct. dll cannot be used on platform which is different from its own build settings.
```

おおまかにエラーは二種類

```error1
UnauthorizedAccessException: Access to the path "/Materials" is denied.
System.IO.Directory.CreateDirectoriesInternal (System.String path) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System.IO/Directory.cs:131)
System.IO.Directory.CreateDirectory (System.String path) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System.IO/Directory.cs:96)
Live2D.Cubism.Editor.CubismAssetProcessor.GenerateBuiltinResources () (at Assets/Live2D/Cubism/Editor/CubismAssetProcessor.cs:219)
Live2D.Cubism.Editor.CubismAssetProcessor.OnPostprocessAllAssets (System.String[] importedAssetPaths, System.String[] deletedAssetPaths, System.String[] movedAssetPaths, System.String[] movedFromAssetPaths) (at Assets/Live2D/Cubism/Editor/CubismAssetProcessor.cs:53)
System.Reflection.MonoMethod.Invoke (System.Object obj, BindingFlags invokeAttr, System.Reflection.Binder binder, System.Object[] parameters, System.Globalization.CultureInfo culture) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System.Reflection/MonoMethod.cs:222)
Rethrow as TargetInvocationException: Exception has been thrown by the target of an invocation.
System.Reflection.MonoMethod.Invoke (System.Object obj, BindingFlags invokeAttr, System.Reflection.Binder binder, System.Object[] parameters, System.Globalization.CultureInfo culture) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System.Reflection/MonoMethod.cs:232)
System.Reflection.MethodBase.Invoke (System.Object obj, System.Object[] parameters) (at /Users/builduser/buildslave/mono/build/mcs/class/corlib/System.Reflection/MethodBase.cs:115)
UnityEditor.AssetPostprocessingInternal.PostprocessAllAssets (System.String[] importedAssets, System.String[] addedAssets, System.String[] deletedAssets, System.String[] movedAssets, System.String[] movedFromPathAssets) (at /Users/builduser/buildslave/unity/build/Editor/Mono/AssetPostprocessor.cs:27)
```

```error2
NullReferenceException: Object reference not set to an instance of an object
Live2D.Cubism.Core.CubismDynamicDrawableData.CreateData (Live2D.Cubism.Core.Unmanaged.CubismUnmanagedModel unmanagedModel) (at Assets/Live2D/Cubism/Core/CubismDynamicDrawableData.cs:31)
Live2D.Cubism.Core.CubismTaskableModel..ctor (Live2D.Cubism.Core.CubismMoc moc) (at Assets/Live2D/Cubism/Core/CubismTaskableModel.cs:147)
Live2D.Cubism.Core.CubismModel.Revive () (at Assets/Live2D/Cubism/Core/CubismModel.cs:214)
Live2D.Cubism.Core.CubismModel.OnEnable () (at Assets/Live2D/Cubism/Core/CubismModel.cs:386)
Live2D.Cubism.Core.CubismModel.OnValidate () (at Assets/Live2D/Cubism/Core/CubismModel.cs:411)
UnityEditorInternal.InternalEditorUtility:GetGameObjectInstanceIDFromComponent(Int32)
UnityEngine.GUIUtility:ProcessEvent(Int32, IntPtr)
```

組み込み用ファイルをD&Dすると、error1が発生します


## Single Face Tracker Plugin (Lite Version - 30 Face Tracking Points)

https://assetstore.unity.com/packages/tools/integration/single-face-tracker-plugin-lite-version-30-face-tracking-points-90212

