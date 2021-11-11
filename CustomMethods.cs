using System;
using System.Drawing;
using System.Runtime.InteropServices;
using ServiceStack.Desktop;
using ServiceStack.Script;

namespace MyApp
{
    public class CustomMethods : ScriptMethods
    {
        [DllImport("ComDlg32.dll", CharSet = CharSet.Unicode)]
        internal static extern int CommDlgExtendedError();

        [DllImport("ComDlg32.dll", CharSet = CharSet.Unicode)]
        internal static extern bool ChooseColor(ref ChooseColor cc);
        
        private int[] customColors = new int[16] {
            0x00FFFFFF, 0x00C0C0C0, 0x00808080, 0x00000000,
            0x00FF0000, 0x00800000, 0x00FFFF00, 0x00808000,
            0x0000FF00, 0x00008000, 0x0000FFFF, 0x00008080,
            0x000000FF, 0x00000080, 0x00FF00FF, 0x00800080,
        };

        public string? chooseColor(ScriptScopeContext scope) => chooseColor(scope, "#ffffff");

        public string? chooseColor(ScriptScopeContext scope, string defaultColor) => scope!.DoWindow(w => {
            var cc = new ChooseColor();
            cc.lStructSize = Marshal.SizeOf(cc);
            var lpCustColors = Marshal.AllocCoTaskMem(16 * sizeof(int));
            try
            {
                Marshal.Copy(customColors, 0, lpCustColors,16);
                cc.hwndOwner = w;
                cc.lpCustColors = lpCustColors;
                cc.Flags = ChooseColorFlags.FullOpen | ChooseColorFlags.RgbInit;
                var c = ColorTranslator.FromHtml(defaultColor);
                cc.rgbResult = ColorTranslator.ToWin32(c);

                if (!ChooseColor(ref cc)) 
                    return (string?) null;
            
                c = ColorTranslator.FromWin32(cc.rgbResult);
                return ColorTranslator.ToHtml(c);
            }
            finally
            {
                Marshal.FreeCoTaskMem(lpCustColors);
            }
        });
    }

    static class ChooseColorFlags
    {
        public const int RgbInit              = 0x00000001;
        public const int FullOpen             = 0x00000002;
        public const int PreventFullOpen      = 0x00000004;
        public const int ShowHelp             = 0x00000008;
        public const int EnableHook           = 0x00000010;
        public const int EnableTemplate       = 0x00000020;
        public const int EnableTemplateHandle = 0x00000040;
        public const int SolidColor           = 0x00000080;
        public const int AnyColor             = 0x00000100;
    }
    struct ChooseColor
    {
        public int        lStructSize;
        public IntPtr     hwndOwner;
        public IntPtr     hInstance;
        public int        rgbResult;
        public IntPtr     lpCustColors;
        public int        Flags;
        public IntPtr     lCustData;
        public CCHookProc lpfnHook;
        public IntPtr     lpTemplateName;
    }
    delegate IntPtr CCHookProc(IntPtr hWnd, ushort msg, int wParam, int lParam);
}